import React, { useContext } from 'react';
import { StyledSellerFooter } from '../styles/general/Footer.styled';
import footerLogo from '../../assets/images/footer.webp';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const SellerFooter = () => {
  const authContext = useContext(AuthContext);

  return (
    <StyledSellerFooter>
      <figure>
        <img src={footerLogo} alt="5 keycaps laying around with 1 having the capkeybara logo" />
      </figure>
      <section>
        <div>
          <nav aria-label="Footer navigation">
            <ul>
              {authContext.isAuthenticatedSeller() ?
                <>
                  <li><Link to="/seller/product">Products</Link></li>
                  <li><Link to="/seller/order">Orders</Link></li>
                </> :
                <>
                  <li><Link to="/seller/login">Log In</Link></li>
                  <li><Link to="/seller/signup">Sign Up</Link></li>
                </>
              }

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

    </StyledSellerFooter>
  );
};

export default SellerFooter;