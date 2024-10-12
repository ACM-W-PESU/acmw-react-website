import React from 'react';
import './footer.css'; 

import acm_logo from './assests/acm_logo.png';
import linkedin_logo from './assests/linkedin_logo.png';
import instagram_logo from './assests/instagram_logo.png';
import mail_logo from './assests/mail_logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={acm_logo} alt="ACM-W logo" className="acm-logo" />
        </div>

        <div className="footer-center">
          <h2>CONTACT US</h2>
          <div className="footer-social">
            <a href="https://www.linkedin.com/company/acmw-pesu-rr/mycompany/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin_logo} alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com/acmw.pesu/" target="_blank" rel="noopener noreferrer">
              <img src={instagram_logo} alt="Instagram" />
            </a>
            <a href="mailto:acmw@pes.edu">
              <img src={mail_logo} alt="Email" />
            </a>
          </div>
        </div>

        <div className="footer-right">
          <p>
            PES University, BE-Block 11th – floor, RR–Campus, Bangalore. <br />
            100 Feet Ring Road, BSK III Stage, Bangalore–560085.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
