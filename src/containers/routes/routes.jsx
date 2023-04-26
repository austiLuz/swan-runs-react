import React from 'react';
import './routes.css';
import runImage from '../../assets/run.jpeg';

const routes = () => {
  const handleButtonClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className='routes-container section__padding' id='routes'>
      <img src={runImage} alt='runImage' />
      <div className='buttons-container'>
        <button
          className='button'
          onClick={() => handleButtonClick('https://www.strava.com/routes/2928350371514220934')}
        >
          Marathon If Wet
        </button>
        <button
          className='button'
          onClick={() => handleButtonClick('https://www.strava.com/routes/2928019433006526678')}
        >
          Marathon When Dry
        </button>
        <button
          className='button'
          onClick={() => handleButtonClick('https://www.strava.com/routes/2928791738475275544')}
        >
          Half Marathon
        </button>
        <button
          className='button'
          onClick={() => handleButtonClick('https://www.strava.com/routes/2929456077997141758')}
        >
          11k Route
        </button>
      </div>
    </div>
  );
};

export default routes;
