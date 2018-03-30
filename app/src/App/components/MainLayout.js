import React from 'react';

require('./stylesheets/MainLayout.scss');

const { object } = React.PropTypes;

/*
 * The component that provides much of the global styles.
 *
 * @todo: This spinner does not work
 *
 * @param {Object} props - The React props object
 *
 * @since 1.0.0
 */

const MainLayout = (props) => {
  const { isFetching, children } = props;

  return (
    <div className="app">
      <div className={ isFetching ? 'show' : 'hide' }>
        <div className="preloader">
          <div className="pl-msg">
            <div className="pl-msg_txt">Just a moment, loading...</div>
          </div>
          <div className="pl-header"></div>
          <div className="pl-course-image"></div>
          <div className="pl-course-content">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div className="pl-course-button"></div>
          </div>
        </div>
      </div>
      <div className={ isFetching ? 'hide' : 'show' }>
        <main>
          { children }
        </main>
      </div>
    </div>
  );
};


MainLayout.propTypes = {
  children: object
};


export default MainLayout;