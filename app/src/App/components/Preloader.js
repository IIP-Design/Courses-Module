import React from 'react';

import LoadingCirclesSVG from 'App/components/LoadingCirclesSVG';

import styles from 'App/components/stylesheets/Preloader.scss';


const Preloader = () => {
  return (
    <div className={ `${ styles.preloader } preloader` }>
      <div className={ `${ styles.msg } pl-msg` }>
        <LoadingCirclesSVG stroke='#4f4f4f' />
        <div className='pl-msg_txt'>Just a moment, loading...</div>
      </div>
      <div className={ `${ styles.header } pl-header` } />
      <div className={ `${ styles.img } pl-course-image` } />
      <div className={ `${ styles.content } pl-course-content` }>
        <div className={ styles.placeholder } />
        <div className={ styles.placeholder } />
        <div className={ styles.placeholder } />
        <div className={ styles.placeholder } />
        <div className={ `${ styles.btn } pl-course-button` } />
      </div>
    </div>
  );
};


export default Preloader;
