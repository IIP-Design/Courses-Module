import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import store from '../../store';
import * as actions from '../actions';
import MainLayout from '../components/MainLayout';


const MainContainer = React.createClass({
  componentDidMount() {
    const root = document.getElementById('course-container');
    const endpoint = `${ args.url }/courses/${ root.dataset.courseId }`;

    store.dispatch(actions.requestData());

    axios.get(endpoint)
      .then(response => store.dispatch(actions.requestData(response.data.courses)))
      .catch(error => store.dispatch(actions.requestData(undefined, error=error)));
  },


  render() {
    // On first render, if courses isn't on props, return null to avoid
    // undefined prop messages through the stack

    if (!this.props.course) {
      return null
    }

    const props = this.props;

    return (
      <MainLayout children={ props.children } isFetching={ props.isFetching }/>
    );
  }
});


const mapStateToProps = ({ app }) => {
  const course = app.data;
  const isFetching = app.isFetching;

  return {
    isFetching,
    course
  };
};


export default connect(mapStateToProps)(MainContainer);

