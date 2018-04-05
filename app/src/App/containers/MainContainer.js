import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import store from 'root/store';
import * as actions from 'App/actions';
import { setLanguage } from 'Language/actions';
import MainLayout from 'App/components/MainLayout';

/*
 * The container component that is responsible for interacting with the Redux store
 *
 * @since 2.0.0
 */

class MainContainer extends React.Component{
  /*
   * When the MainContainer component mounts, it grabs the course id, performs an ajax request, and passes the response off to redux
   *
   * @todo We might consider moving this step earlier in the application's lifecyle
   */
  componentDidMount() {
    var url;
    try {
      url = args.url;
    }
    catch (e) {
      console.log('IN DEV MODE assign hardcoded value');
      url = 'https://courses.america.gov/wp-json/america/v1';
    } 

    const root = document.getElementById('course-container');
    const endpoint = `${ url }/courses/${ root.dataset.courseId }`;

    store.dispatch(setLanguage(root.dataset.language)); 
    store.dispatch(actions.requestData());

    axios.get( endpoint )
      .then(response => store.dispatch(actions.requestData(response.data.courses)))
      .catch(error => store.dispatch(actions.requestData(undefined, error=error)));
  }

  render() {
    const { course,
            children,
            isFetching,
            language } = this.props;

    // On first render, if courses isn't on props, return null to avoid
    // undefined prop messages throughout the call stack
    if (typeof course === 'undefined' || 'id' in course === false) {
      return null;
    }

    return (
      <MainLayout
        children={ children }
        isFetching={ isFetching }
        language={ language } />
    );
  }
};


/*
 * Standard Redux mapStateToProps function.
 *
 * @param {Object} state.app - The app object in the Redux store
 *
 * @return {Object} MainContainerPropsObject - Data from state mapped to the MainContainer's props
 *
 * @since 2.0.0
 */

const mapStateToProps = ({ app, language }) => {
  const course = app.data;
  const isFetching = app.isFetching;


  /*
   * @typedef {Object} MainContainerPropsObject
   * @property {Boolean} isFetching - Is the application in the state of fetching data
   * @property {Object} course - The course data from state
   */

  return {
    isFetching,
    course,
    language
  };
};


export default connect(mapStateToProps)(MainContainer);
