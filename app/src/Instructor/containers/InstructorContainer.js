import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { sortBy, uniqBy, flattenArray } from 'App/helpers';

import Instructor from 'Instructor/components/Instructor';

const { object } = PropTypes;


/**
 * The Instructor container component responsible for interactin with the Redux store and passing
 * state to the Instrutor component
 *
 * @since 2.0.0
 */

const InstructorContainer = props => <Instructor instructor={ props.instructor }/>;


InstructorContainer.propTypes = {
  params: object
};


/**
 * Standard Redux mapStateToProps function.
 *
 * @param {Object} state.app - The app object in the Redux store
 * @param {String} props.params.slug - The url slug from the router
 *
 * @return {Object} InstructorContainerPropsObject - Data
 * from state mapped to the Instructor component's props
 *
 * @since 2.0.0
 */

const mapStateToProps = ({ app }, { match }) => {
  // Don't like that this code is basically repeated from Course/components/Course.js line 35
  const instructors = flattenArray(app.data.lessons, 'instructors')
      .sort(sortBy('id', 'desc'))
      .reduce(uniqBy, []);

  const { slug } = match.params;
  const instructor = instructors.find(instructor => slug === instructor.slug);


  /**
   * @typedef {Object} InstructorContainerPropsObject
   * @property {Object} instructor - The correct instructor object from state
   *
   * @since 2.0.0
   */

  return {
    instructor
  };
};


export default connect(mapStateToProps)(InstructorContainer);
