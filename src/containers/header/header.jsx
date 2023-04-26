import React from 'react';
import './header.css';
import purpleImage from '../../assets/purple.jpeg'

const Header = () => {
  return (
    <div className='swan__header section__padding' id='home'>
      <div className='swan__header-flex'>
        <div className='swan__header-image'>
          <img src={purpleImage} alt='flowers' />
        </div>
        <div className='swan__header-content'>
          <h1 className='gradient__text'>The Swan Runs</h1>
          <p>The Swan Runs has been created as a set of beautiful running routes starting from <a href='https://www.thehennyswan.co.uk/' target='_blank' rel='noopener noreferrer'>The Henny Swan.</a> There is no race day. Instead, run when you like (any day or time), start wherever, and if you like you can share your time with the community.</p>
          <ul>
            <li>Multiple distance options: marathon / half marathon / 11k</li>
            <li>No entry fee</li>
            <li>No date or time</li>
            <li>No fixed starting point or direction</li>
            <li>Requirement to enjoy yourself, take photos and maybe pop into the Henny Swan to finish</li>
          </ul>
          <h2>Submitting your time & feedback</h2>
          <p>If you’d like to be added to a leaderboard / list of finishers, please fill in <a href='https://airtable.com/shrjzHgNV9YtMdgKG' target='_blank' rel='noopener noreferrer'>this form</a> and I’ll look to add you as soon as I can. Please also give your feedback and notes on the route.</p>
          <h2>Location</h2>
          <p>Main start location is <a href='https://www.thehennyswan.co.uk/' target='_blank' rel='noopener noreferrer'>The Henny Swan</a>, but you can start wherever you like! <a href='https://www.greateranglia.co.uk/travel-information/station-information/bue' target='_blank' rel='noopener noreferrer'>Bures Train Station</a> is an intended option to start at for those without a car, and for the 11k <a href='https://www.greateranglia.co.uk/travel-information/station-information/suy' target='_blank' rel='noopener noreferrer'>Sudbury train station</a> is a nearby option.</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
