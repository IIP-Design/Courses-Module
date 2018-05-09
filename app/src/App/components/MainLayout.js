import React from 'react';
import PropTypes from 'prop-types';

import Preloader from 'App/components/Preloader';

const { object } = PropTypes;

/**
 * The component that provides much of the global styles.
 *
 * @param {Object} props - The React props object
 *
 * @since 1.0.0
 */

const MainLayout = (props) => {
  const { isFetching, children } = props;

  return (
    <div className='app'>
      { isFetching ? <Preloader /> : <main>{ children }</main> }
    </div>
  );
};


MainLayout.propTypes = {
  children: object
};


export default MainLayout;
