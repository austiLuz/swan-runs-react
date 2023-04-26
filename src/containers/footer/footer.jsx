import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStrava, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './footer.css'

const Footer = () => {
  return (
    <footer className='section__padding'>
      <div className="footer-icons" id='contact'>
        <a href="https://www.strava.com/athletes/13867251" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faStrava} size="lg" />
          <p>Strava</p>
        </a>
        <a href="https://instagram.com/theswanruns?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="lg" />
          <p>Instagram</p>
        </a>
      </div>
      <p className="footer-text">Created by Ian Austin 2023</p>
    </footer>
  );
};

export default Footer;
