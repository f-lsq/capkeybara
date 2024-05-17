import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledSellerSidebar } from '../styles/sellers/SellerSidebar.styled';
import { BoxArrowLeft, BoxSeam, ClipboardCheck } from 'react-bootstrap-icons';
import { useRefreshAccessToken, notifySuccess } from '../../utils';
import { AuthContext } from '../../context/AuthContext';
import { SellerContext } from '../../context/SellerContext';

const SellerSidebar = () => {
  useRefreshAccessToken();

  const authContext = useContext(AuthContext);
  const sellerContext = useContext(SellerContext);
  const [seller, setSeller] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sellerId = await sellerContext.getSellerId();
        const responseSeller = await sellerContext.getSellerById(sellerId);
        setSeller(responseSeller.data.existingSeller)
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, [seller])

  const handleLogOut = () => {
    authContext.logout();
    sellerContext.logout();
    setSeller(null);
    notifySuccess("Log out successful. See you again!", "logoutSuccess");
  }

  return (
    <>
      <StyledSellerSidebar>
        {
          seller ?
            <Link to="/seller/profile">
              <figure>
                <img src={seller.image_url} alt={seller.name} />
                <figcaption>
                  <p>{seller.name}</p>
                  <p>@{seller.username}</p>
                </figcaption>
              </figure>
            </Link> :
            <p>Loading...</p>
        }
        <nav>
          <ul>
            <li><Link to="/seller/product"><BoxSeam />Products</Link></li>
            <li><Link to="/seller/order"><ClipboardCheck />Orders</Link></li>
          </ul>
          <ul>
            <li><Link to="/seller/login" onClick={handleLogOut}><BoxArrowLeft />Logout</Link></li>
          </ul>
        </nav>
      </StyledSellerSidebar>
    </>
  );
};

export default SellerSidebar;