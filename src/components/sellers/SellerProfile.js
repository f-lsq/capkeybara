import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledSellerProfile } from '../styles/sellers/SellerProfile.styled';
import loadingScreen from '../../assets/images/main/loading.gif';
import { convertDateTime, notifySuccess } from '../../utils';
import { AuthContext } from '../../context/AuthContext';
import { OrderContext } from '../../context/OrderContext';
import { ProductContext } from '../../context/ProductContext';
import { SellerContext } from '../../context/SellerContext';
import { BoxArrowLeft } from 'react-bootstrap-icons';

const SellerProfile = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const orderContext = useContext(OrderContext);
  const productContext = useContext(ProductContext);
  const sellerContext = useContext(SellerContext);
  const [ordersFulfilled, setOrdersFulfiled] = useState(null);
  const [productsSold, setProductsSold] = useState(null);
  const [seller, setSeller] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sellerId = await sellerContext.getSellerId();
        const responseSeller = await sellerContext.getSellerById(sellerId);
        setSeller(responseSeller.data.existingSeller)

        const responseProducts = await productContext.getProductsBySeller(sellerId);
        const responseOrders = await orderContext.getSellerOrders(sellerId);
        let products = responseProducts.data.sellerProducts;
        let orders = responseOrders.data.allOrders;
        let quantitySold = 0, ordersCompleted = 0;
        if (products && products.length !== 0) {
          products.forEach(product => { quantitySold += product.quantity_sold })
        }
        if (orders && orders.length !== 0) {
          orders.forEach(order => {
            if (order.order_status === "Delivered") {
              ordersCompleted += 1
            }
          })
        }
        setProductsSold(quantitySold);
        setOrdersFulfiled(ordersCompleted);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, [productsSold, ordersFulfilled, orderContext, productContext, sellerContext])

  const handleLogOut = () => {
    authContext.logout();
    sellerContext.logout();
    setSeller(null);
    notifySuccess("Log out successful. See you again!", "logoutSuccess");
    navigate(`/seller/login`);
  }

  return (
    <StyledSellerProfile>
      {seller ?
        <section>
          <button onClick={handleLogOut}><BoxArrowLeft /></button>
          <figure>
            <img src={seller.image_url} alt={seller.name} />
            <figcaption>
              <h1>{seller.name}</h1>
              <h3>@{seller.username}</h3>
            </figcaption>
          </figure>
          <article>
            <p>Email: {seller.email}</p>
            <p>Contact: {seller.contact}</p>
            <p>Join Date: {convertDateTime(seller.date_created)}</p>
          </article>
          <article>
            <div>
              <h3>Products Sold</h3>
              <p>{productsSold ? productsSold : 0}</p>
            </div>
            <div>
              <h3>Orders Fulfilled</h3>
              <p>{ordersFulfilled ? ordersFulfilled : 0}</p>
            </div>
          </article>
        </section>
        :
        <div className="loading-screen">
          <img className="loading-img" src={loadingScreen} alt="Loading screen showing a capybara sleeping peacefully beside a flower" />
          <h1 className="loading-font">Loading...</h1>
        </div>}
    </StyledSellerProfile>
  );
};

export default SellerProfile;