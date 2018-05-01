import React from 'react';

import LoadingCirclesSVG from 'App/components/LoadingCirclesSVG';

import 'App/components/stylesheets/Preloader.scss';


const Preloader = () => {
  return (
    <div className='preloader'>
      <div className='pl-msg'>
        <LoadingCirclesSVG />
        <div className='pl-msg_txt'>Just a moment, loading...</div>
      </div>
      <div className='pl-header' />
      <div className='pl-course-image' />
      <div className='pl-course-content'>
        <div />
        <div />
        <div />
        <div />
        <div className='pl-course-button' />
      </div>
    </div>
  );
};


export default Preloader;
