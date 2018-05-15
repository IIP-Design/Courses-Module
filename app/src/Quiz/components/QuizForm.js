import React from 'react';
import { createHashHistory } from 'history';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';

import { flattenArray } from 'App/helpers';
import { clearState } from 'root/sessionStorage.js';

import Loading from 'App/components/Loading';
import QuestionList from 'Quiz/components/QuestionList';
import QuizBtn from 'Quiz/components/QuizBtn';

import styles from 'Quiz/components/stylesheets/Quiz.scss';

const { array, func, number, string, object } = PropTypes;


/**
 * Dynamic imports
 *
 * @since tba
 */

const Modal = Loadable({
  loader: () => import(
    /* webpackChunkName: 'Modal' */
    'Quiz/components/Modal'
  ),
  loading: Loading
});

const Notification = Loadable({
  loader: () => import(
    /* webpackChunkName: 'Notification' */
    'react-notification/dist/notification'
  ),
  loading: Loading
});


/**
 * The QuizForm component
 *
 * @todo: Need to display question type based on question type
 *
 * @since 2.0.0
 */

class QuizForm extends React.Component {
  constructor(props) {
    super(props);

    /**
     * Maximum number of attempts
     * Should always be one less than the number of actual max attempts because it starts at zero
     *
     * @since 2.1.0
     */
    this.maxAttempts = 5;

    this.state = {
      isCertified: false,
      isNotificationActive: false,
      numIncorrect: 0,
      attemptsClassname: `${ styles.hide } ${ styles.attempts }`,
      incorrectClassname: `${ styles.hide } ${ styles.incorrect }`,
      isModalOpen: false
    };

    this.toggleNotification = this.toggleNotification.bind(this);
    this.updateStatusNotification = this.updateStatusNotification.bind(this);
    this.isAllAnswered = this.isAllAnswered.bind(this);
    this.showCorrectIndicator = this.showCorrectIndicator.bind(this);
    this.generateLink = this.generateLink.bind(this);
    this.generateExitLink = this.generateExitLink.bind(this);
    this.goToCertificateScreen = this.goToCertificateScreen.bind(this);
    this.isCorrectFilter = this.isCorrectFilter.bind(this);
    this.getCorrectAnswers = this.getCorrectAnswers.bind(this);
    this.scoreQuiz = this.scoreQuiz.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleNotification = this.handleNotification.bind(this);
    this.handleCertAgreement = this.handleCertAgreement.bind(this);
  }


  /**
   * Set whether the notification is active in state
   *
   * @since 1.0.0
   */
  toggleNotification() {
    this.setState({
      isNotificationActive: !this.state.isNotificationActive
    });
  }


  /**
   * Update the status display based on user answers
   *
   * @since 2.1.0
   */
  updateStatusNotification() {
    this.setState({
      attemptsClassname: `${ styles.show } ${ styles.attempts }`,
      incorrectClassname: `${ styles.show } ${ styles.incorrect }`
    });
  }


  /**
   * Check if each question has answer
   *
   * @since 1.0.0
   */
  isAllAnswered() {
    const { userAnswers, questions } = this.props;
    return Object.keys(userAnswers).length === questions.length;
  }


  /**
   * Add an 'incorrect' and 'correct' class to an element
   *
   * @param {String} id - The html element's id
   * @param {String} cls - The html class to add to the element
   *
   * @since 1.0.0
   */
  showCorrectIndicator(id, cls) {
    const el = document.getElementById(id);

		el.classList.remove(`${ styles.incorrect }`);
		el.classList.remove(`${ styles.correct }`);
    el.classList.add(cls);
  }


  /**
   * Generate a link
   *
   * @param {String} url - A relative url from the root element's exit-page data attribute
   * @param {Object} [params] - Option url parameters
   *
   * @return {String} url - An absolute url to redirect after the quiz completes successfully
   *
   * @since 1.0.0
   */
  generateLink(url, params={}) {
    const esc = encodeURIComponent;
    let query, a;

    // Generate the query string
    if (params) {
      query = Object.keys(params)
                    .map(k => `${esc(k)}=${esc(params[k])}`)
                    .join('&');
    }

    // Build the url and return it
    return ((url) => {
      (!a) ? a = document.createElement('a') : a;
      a.href = `${ url }?${ query }`;
      return a.href;
    })(url);
  }


  /**
   * Generate the link to the page a user should be
   * redirected to after successfully completing the quiz
   *
   * @see https://github.com/IIP-Design/wp-simple-nonce
   *
   * @return {String} - The absolute url
   *
   * @since 1.0.0
   */
  generateExitLink() {
    const url = document.getElementById('course-container')
                        .getAttribute('data-exit-page');
    const params = { course: this.props.courseName };

    // The token object is generated by the wp-simple-nonce plugin.
    if (typeof token !== 'undefined') {
      if ('name' in token && 'value' in token) {
        params.tokenName = token.name;
        params.tokenValue = token.value;
      }
    }

    clearState();

    return this.generateLink(url, params);
  }


  /**
   * Redirect the user to the exit page
   *
   * @since 1.0.0
   */
  goToCertificateScreen() {
    const exitPage = this.generateExitLink();
    window.location = exitPage;
  }


  /**
   * Filter correct question choices
   *
   * @param {Object} choice - A choice from a question.choices array
   *
   * @return {Object} choice - Return a choice that matches the condition
   *
   * @since 2.0.0
   */
  isCorrectFilter(choice) {
    return choice.correct === true;
  }


  /**
   * Get an array of correct answers
   *
   * @param {Array} questions - An array of questions
   *
   * @return {Array} correctAnswers - An array of correct answers
   *
   * @since 2.0.0
   */
  getCorrectAnswers(questions) {
    // Get a flat array of all the questions' choices
    const choices = flattenArray(questions, 'choices');

    // Return only the filtered choices
    return choices.filter(this.isCorrectFilter);
  }


  /**
   * Compare the correct answers with the user's answers
   *
   * @return {Array} results - An array of correct answers
   *
   * @since 2.0.0
   */
  scoreQuiz() {
    const { questions, userAnswers } = this.props;
    const correctAnswers = this.getCorrectAnswers(questions);
    const results = [];

    userAnswers.forEach((answer) => {

      // Set it to incorrect initally
      this.showCorrectIndicator(answer.questionId, `${ styles.incorrect }`);

      correctAnswers.forEach((correct) => {

        // If the answer and correct answer match, mark it correct and push it to the results array
        if (correct.id === answer.choiceId) {
          this.showCorrectIndicator(answer.questionId, `${ styles.correct }`);
          results.push(answer);
        }
      });
    });

    this.setState({
      numIncorrect: userAnswers.length - results.length
    });

    return results;
  }


  /**
   * Respond to the form's onSubmit event
   *
   * @param {Object} event - The event object
   */
  handleSubmit(e) {
    e.preventDefault();
    const {
      questions,
      numAttempts,
      incrementNumAttempts
    } = this.props;

    // All questions not answered, show notification
    if (!this.isAllAnswered() || !this.state.isCertified) {
      this.toggleNotification();
    }

    // All questions answered correctly, send to cert screen
    else if (this.scoreQuiz().length === questions.length)  {
      this.goToCertificateScreen();
    }

    // User got some wrong
    else {

      // If max attempts reached, show the modal
      if ( numAttempts === (this.maxAttempts -1) ) {
        this.toggleModal();
      // Else notify user of mistakes
      } else {
        this.updateStatusNotification();
        incrementNumAttempts();
      }
    }
  }

  /**
   * Set whether the modal is open in state
   *
   * @since 2.0.3
   */
  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  /**
   * Reset quiz and redirect to first lesson
   *
   * @since 2.0.3
   */
  closeModal() {
    const { resetQuiz, lessons } = this.props;
    const history = createHashHistory();
    resetQuiz();
    history.push(`/lesson/${lessons[0].slug}`);
  }

  /**
   * Set whether the notification is active in state
   *
   * @since version TBD
   */
  handleNotification() {
    this.setState({ isNotificationActive: false });
  }

  /**
   * Handle certificate agreement checkbox
   *
   * @since version TBD
   */  
  handleCertAgreement() {
    this.setState({ isCertified: !this.state.isCertified });
  }

  render() {
    const {
      language,
      questions,
      numAttempts
    } = this.props;

    const {
    quizAgree,
      quizCert,
      quizBtn,
      quizWrong,
      quizAttemptsRemain,
      quizAttempts,
      quizAnswer,
      quizCertAlert,
      quizDismiss,
      noMoreAttempts
    } = language;

    const {
      incorrectClassname,
      numIncorrect,
      attemptsClassname,
      isNotificationActive,
      isCertified,
      isModalOpen
    } = this.state;

    return (
      <div className={ styles.formContainer }>
        <form id='formQuiz' onSubmit={ this.handleSubmit }>
          <div className={ `${ styles.agrmt } quiz-agrmt` }>{ quizAgree } <span className={ `${ styles.required } quiz-required` }>*</span></div>
          <label htmlFor='certify'>
            <input
              id='certify'
              type='checkbox'
              name='certify'
              value={ isCertified }
              onChange={ this.handleCertAgreement }
              className={ styles.checkbox } />
            { quizCert }
          </label>
          <QuestionList questions={ questions }/>
          <QuizBtn value={ quizBtn } className={ styles.btn } />
          <span className={ incorrectClassname }>{ numIncorrect } { quizWrong } </span>
        </form>
        <div className={ attemptsClassname }>{ quizAttemptsRemain }: { this.maxAttempts - numAttempts } - { quizAttempts }</div>

        { isNotificationActive &&
          <Notification
            barStyle={ {
              position: 'absolute',
              left: '0',
              bottom: '1rem',
              zIndex: '10'
            } }
            isActive={ isNotificationActive }
            message={ isCertified ? quizAnswer : quizCertAlert }
            action={ quizDismiss }
            onDismiss={ this.toggleNotification }
            dismissAfter={ 5500 }
            onClick={ this.handleNotification }/>
        }

        { isModalOpen &&
          <Modal
            show={ isModalOpen }
            onClose={ this.closeModal }
            language={ language }>
            { noMoreAttempts }
          </Modal>
        }
      </div>
    );
  }
}


QuizForm.propTypes = {
  userAnswers: array,
  numAttempts: number,
  courseName: string,
  lessons: array,
  questions: array,
  incrementNumAttempts: func,
  resetQuiz: func,
  language: object
};


export default QuizForm;
