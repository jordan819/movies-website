import React from 'react';
import './Footer.css'

const Footer = () => {
  return(
    <div className="d-flex footer border-top row">
      <div>
        <a style={{color: '#3b5998'}} href="https://www.facebook.com/" role="button">
          <i class="fab fa-facebook-f fa-lg"></i>
        </a>
        <a style={{color: '#ac2bac'}} href="https://www.instagram.com/" role="button">
          <i class="fab fa-instagram fa-lg"></i>
        </a>
        <a style={{color: '#55acee'}} href="https://twitter.com/" role="button">
          <i class="fab fa-twitter fa-lg"></i>
        </a>
      </div>
      <div>
        <p>MovieCave&copy;2021</p>
      </div>

    </div>
  );
}

export default Footer;
