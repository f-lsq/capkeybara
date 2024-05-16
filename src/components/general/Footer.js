import React from 'react';
import { StyledFooter } from '../styles/general/Footer.styled';
import footerLogo from '../../assets/images/main/footer.webp';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <StyledFooter>
      <figure>
        <img src={footerLogo} alt="5 keycaps laying around with 1 having the capkeybara logo" />
      </figure>
      <section>
        <div>
          <nav aria-label="Footer navigation">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/build">Build</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
          <nav aria-label="Social navigation">
            <ul>
              <li><Link to="https://github.com/f-lsq" target="_blank">Github</Link></li>
              <li><Link to="https://www.linkedin.com/in/f-lsq" target="_blank">LinkedIn</Link></li>
              <li><Link to="mailto:fionaloo69@gmail.com">Email</Link></li>
            </ul>
          </nav>
        </div>
        <p>&copy; 2024 Capkeybara. All rights reserved.</p>
      </section>

    </StyledFooter>
  );
};

export default Footer;