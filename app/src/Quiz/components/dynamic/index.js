import { DynamicImport } from 'App/helpers';


export const Quiz = DynamicImport({
  loader: () => import(
    /* webpackChunkName: 'Quiz' */
    'Quiz/components/Quiz'
  )
});


export const QuizForm = DynamicImport({
  loader: () => import(
    /* webpackChunkName: 'QuizForm' */
    'Quiz/components/QuizForm'
  )
});


export const QuizBtn = DynamicImport({
  loader: () => import(
    /* webpackChunkName: 'QuizBtn' */
    'Quiz/components/QuizBtn'
  )
});


export const RadioChoice = DynamicImport({
  loader: () => import(
    /* webpackChunkName: 'RadioChoice' */
    'Quiz/components/RadioChoice'
  )
});


export const QuestionList = DynamicImport({
  loader: () => import(
    /* webpackChunkName: 'QuestionList' */
    'Quiz/components/QuestionList'
  )
});


export const Modal = DynamicImport({
  loader: () => import(
    /* webpackChunkName: 'Modal' */
    'Quiz/components/Modal'
  )
});


export const Notification = DynamicImport({
  loader: () => import(
    /* webpackChunkName: 'react-notification' */
    'react-notification/dist/notification'
  )
});


export const QuizLessons = DynamicImport({
  loader: () => import(
    /* webpackChunkName: 'QuizLessons' */
    'Quiz/components/QuizLessons'
  )
});


export const QuizFormContainer = DynamicImport({
  loader: () => import(
    /* webpackChunkName: 'QuizFormContainer' */
    'Quiz/containers/QuizFormContainer'
  )
});


export const Question = DynamicImport({
  loader: () => import(
    /* webpackChunkName: 'Question' */
    'Quiz/components/Question'
  )
});


export const ChoiceList = DynamicImport({
  loader: () => import(
    /* webpackChunkName: 'ChoiceList' */
    'Quiz/components/ChoiceList'
  )
});


export const RadioChoiceContainer = DynamicImport({
  loader: () => import(
    /* webpackChunkName: 'RadioChoiceContainer' */
    'Quiz/containers/RadioChoiceContainer'
  )
});