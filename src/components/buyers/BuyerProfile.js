import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledBuyerProfile } from '../styles/buyers/BuyerProfile.styled';
import buyerOrdersEmptyBackground from "../../assets/images/main/buyer-orders-empty.webp"
import loadingScreen from '../../assets/images/main/loading.gif';
import { convertDateTime } from '../../utils';
import { BuyerContext } from '../../context/BuyerContext';
import { OrderContext } from '../../context/OrderContext';

const BuyerProfile = () => {
  const navigate = useNavigate();
  const buyerContext = useContext(BuyerContext);
  const orderContext = useContext(OrderContext);
  const [buyer, setBuyer] = useState(null);
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const buyerId = await buyerContext.getBuyerId();
        const responseBuyer = await buyerContext.getBuyerById(buyerId);
        const responseOrders = await orderContext.getBuyerOrders(buyerId);
        setBuyer(responseBuyer.data.existingBuyer);
        setOrders(responseOrders.data.allOrders);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, [])

  return (
    <StyledBuyerProfile>
      {buyer ?
        <>
          <div id="profile-mobile-view">
            <aside>
              <img src={buyer.image_url} alt={buyer.name} />
              <figcaption>
                <p>{buyer.first_name} {buyer.last_name}</p>
                <p>@{buyer.username}</p>
              </figcaption>
            </aside>
            <main>
              <h1>Order History</h1>
              {orders.length !== 0 ?
                (
                  orders.map(order => (
                    <table key={order.id}>
                      <thead>
                        <tr>
                          <td>
                            <p className='profile-order-id'>CP{order.id}</p>
                            <p>{convertDateTime(order.date_created)}</p>
                          </td>
                          {
                            order.order_status === "Delivered" ?
                              <td className='profile-order-status-delivered'>
                                <p>{order.order_status}</p>
                              </td> :
                              <td className='profile-order-status'>
                                {order.order_status}
                              </td>
                          }
                        </tr>
                        <tr>
                          <td colSpan="100%" className='profile-order-address'>
                            <p>Deliver to:</p>
                            <p>{order.shipping_address}</p>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          order.order_items.map(order_item => (
                            <tr key={order_item.id}>
                              <td className="profile-order-product">
                                <img src={order_item.product.image_url} alt={order_item.product.name} />
                                <div>
                                  <p>{order_item.product.name}</p>
                                  <p>Quantity: {order_item.quantity}</p>
                                </div>
                              </td>
                              <td className='profile-order-bold'>
                                $ {(order_item.quantity * order_item.product.price).toLocaleString(undefined, {
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2
                                })}
                              </td>
                            </tr>
                          ))
                        }
                      </tbody>
                      <tfoot>
                        <tr>
                          <td>Subtotal</td>
                          <td>$ {order.subtotal.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                          })}</td>
                        </tr>
                        <tr>
                          <td>Shipping Fee</td>
                          <td>$ {(order.shipping_cost * order.total_quantity).toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                          })}</td>
                        </tr>
                        <tr>
                          <td className='profile-order-bold'>Total Paid</td>
                          <td className='profile-order-bold'>$ {(Number(order.subtotal) + (order.shipping_cost * order.total_quantity)).toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                          })}</td>
                        </tr>
                      </tfoot>
                    </table>
                  ))
                ) :
                <div className='profile-no-order-view'>
                  <img src={buyerOrdersEmptyBackground} alt="Capybara family taking a swim in a pond" />
                  <h1>Your Order History is Empty!</h1>
                  <p>Start adding products and making orders with us to make us cappy.</p>
                  <button onClick={() => navigate("/shop")}>Start Shopping</button>
                </div>
              }
            </main>
          </div>
          <div id="profile-standard-view">
            <aside>
              <figure>
                <img src={buyer.image_url} alt={buyer.name} />
                <figcaption>
                  <p>{buyer.first_name} {buyer.last_name}</p>
                  <p>@{buyer.username}</p>
                </figcaption>
              </figure>
            </aside>
            <main>
              <h1>Order History</h1>
              {orders.length !== 0 ?
                (
                  orders.map(order => (
                    <table key={order.id}>
                      <thead>
                        <tr>
                          <td>
                            Order ID:
                          </td>
                          <td>
                            Order Date:
                          </td>
                          <td>
                            Shipping Address:
                          </td>
                          <td>
                            Order Status:
                          </td>
                          {order.date_fulfilled &&
                            <td>
                              Date Fulfilled:
                            </td>}
                        </tr>
                        <tr>
                          <td className='profile-order-id'>
                            CP{order.id}
                          </td>
                          <td>
                            {convertDateTime(order.date_created)}
                          </td>
                          <td className='profile-order-address'>
                            {order.shipping_address}
                          </td>
                          {
                            order.order_status === "Delivered" ?
                              <td className='profile-order-status-delivered'>
                                {order.order_status}
                              </td> :
                              <td className='profile-order-status'>
                                {order.order_status}
                              </td>
                          }
                          {
                            order.date_fulfilled ?
                              <td>
                                {convertDateTime(order.date_fulfilled)}
                              </td> :
                              <td></td>
                          }
                        </tr>
                      </thead>
                      <tbody>
                        {
                          order.order_items.map(order_item => (
                            <tr key={order_item.id}>
                              <td>
                                <img src={order_item.product.image_url} alt={order_item.product.name} />
                              </td>
                              <td className="profile-order-product">
                                <p>{order_item.product.name}</p>
                                <p>Quantity: {order_item.quantity}</p>
                              </td>
                              <td>
                              </td>
                              <td colSpan="2" className="profile-order-bold">
                                $ {(order_item.quantity * order_item.product.price).toLocaleString(undefined, {
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2
                                })}
                              </td>
                            </tr>
                          ))
                        }
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan="3"></td>
                          <td>Subtotal</td>
                          <td>$ {order.subtotal.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                          })}</td>
                        </tr>
                        <tr>
                          <td colSpan="3"></td>
                          <td>Shipping Fee</td>
                          <td>$ {(order.shipping_cost * order.total_quantity).toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                          })}</td>
                        </tr>
                        <tr>
                          <td colSpan="3"></td>
                          <td className="profile-order-bold">Total Paid</td>
                          <td className="profile-order-bold">$ {(Number(order.subtotal) + (order.shipping_cost * order.total_quantity)).toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                          })}</td>
                        </tr>
                      </tfoot>
                    </table>
                  ))
                ) :
                <div className='profile-no-order-view'>
                  <img src={buyerOrdersEmptyBackground} alt="Capybara family taking a swim in a pond" />
                  <h1>Your Order History is Empty!</h1>
                  <p>Start adding products and making orders with us to make us cappy.</p>
                  <button onClick={() => navigate("/shop")}>Start Shopping</button>
                </div>
              }
            </main>
          </div>
        </> :
        <div className="loading-screen">
          <img src={loadingScreen} alt="Loading screen showing a capybara sleeping peacefully beside a flower" />
          <h1>Loading...</h1>
        </div>
      }
    </StyledBuyerProfile>
  );
};

export default BuyerProfile;