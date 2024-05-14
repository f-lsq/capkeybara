import React, { useContext, useEffect, useState } from 'react';
import { SellerContext } from '../../context/SellerContext';
import { StyledSellerProfile } from '../styles/sellers/SellerProfile.styled';
import loadingScreen from '../../assets/images/loading.gif';
import { convertDateTime } from '../../utils';
import { ProductContext } from '../../context/ProductContext';
import { OrderContext } from '../../context/OrderContext';

const SellerProfile = () => {

  const sellerContext = useContext(SellerContext);
  const productContext = useContext(ProductContext);
  const [seller, setSeller] = useState(null);
  const [productsSold, setProductsSold] = useState(null);
  const [ordersFulfilled, setOrdersFulfiled] = useState(null);
  const orderContext = useContext(OrderContext);

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
          products.forEach(product => {quantitySold += product.quantity_sold})
        }
        if (orders && orders.length !== 0) {
          orders.forEach(order => {
            if (order.order_status == "Delivered") {
              ordersCompleted += 1
            }})
        }
        setProductsSold(quantitySold);
        setOrdersFulfiled(ordersCompleted);    
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, [productsSold, ordersFulfilled])

  return (
    <StyledSellerProfile>
      {seller ? 
      <section>
          <figure>
            <img src={seller.image_url} alt={seller.name}/>
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
          <section>
            <div>
              <h3>Products Sold</h3>
              <p>{productsSold ? productsSold : "..."}</p>
            </div>
            <div>
              <h3>Orders Fulfilled</h3>
              <p>{ordersFulfilled ? ordersFulfilled : "..."}</p>
            </div>
          </section>
      </section>
      :
        <div className="loading-screen">
          <img src={loadingScreen} alt="Loading screen showing a capybara sleeping peacefully beside a flower" />
          <h1>Loading...</h1>
        </div>}
    </StyledSellerProfile>
  );
};

export default SellerProfile;