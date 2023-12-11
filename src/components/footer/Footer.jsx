import React from 'react';
import './Footer.css'; // Make sure to create a corresponding CSS file
import logo from '../../assets/logo.png'
import Tri from '../../assets/triangle.png'
import Right from '../../assets/stroke.png'
import Left from '../../assets/paper_tear.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo column */}
        <div className="footer-column">
          <img src={logo} alt="Zyemira Concert Logo" className="footer-logo" />
        </div>
        
        {/* Fast Links column */}
        <div className="footer-column">
          <h3>Fast Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#event">Event</a></li>
            <li><a href="#tickets">Tickets</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#schedule">Schedule</a></li>
            <li><a href="#newsletter">Newsletter</a></li>
            <li><a href="#booking">Booking</a></li>
          </ul>
        </div>
        
        {/* Performers column */}
        <div className="footer-column">
          <h3>Performers</h3>
          <ul>
            <li><a href="#">Solo Singer</a></li>
            <li><a href="#">Duo Singers</a></li>
            <li><a href="#">Rapper</a></li>
            <li><a href="#">Rock</a></li>
            <li><a href="#">EDM</a></li>
          </ul>
        </div>
        
        {/* Learn More button column */}
        <div className="footer-column">
          <button className="learn-more-btn">LEARN MORE <img src={Tri} alt="triangle" /></button>
        </div>
      </div>
      <div className='imgright'>
      <img src={Right} alt="rightimg" />
      </div>
      
      <div className='leftimg'>
        <img src={Left} alt="leftimg" />
      </div>
      
    </footer>
  );
}

export default Footer;
