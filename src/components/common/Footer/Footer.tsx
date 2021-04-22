import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { useHistory } from 'react-router';

const Footer = (): React.ReactElement => {
  const { push } = useHistory();
  const goToDashboard = () => push(`/`);

  return (
    <footer className="footer-wrapper">
      <div className="contact-us">
        <h3 onClick={goToDashboard}>Cristian Garcia</h3>
        {/* <p>physical address</p>
        <p>Suite #</p> */}
        <p>Napa CA, 94559</p>
        {/* <p>Phone Number</p> */}
        {/* <p>Hours of Operation</p> */}
      </div>

      <div className="customer-service">
        <h3>Customer Service</h3>
        {/* <p>Phone Number</p> */}
        <p>
          <a href="mailto:mailto:cristiansbd.3k@gmail.com?subject=Contact Cristian Garcia Fitness">
            Contact Us
          </a>
        </p>
        <a
          className="instagram-icon"
          href="https://www.instagram.com/cristiannoh15/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
      <div className="copy-rights">
        <p> Made by &#169; bigTechnology | All rights reserved </p>
      </div>
    </footer>
  );
};

export default Footer;
