import React, { useContext, useEffect, useState } from 'react';
import { StyledBuyerProfile } from '../styles/buyers/BuyerProfile.styled';
import { BuyerContext } from '../../context/BuyerContext';
import loadingScreen from '../../assets/images/loading.gif';
import { OrderContext } from '../../context/OrderContext';
import { convertDateTime } from '../../utils';

const BuyerProfile = () => {

  const buyerContext = useContext(BuyerContext);
  const orderContext = useContext(OrderContext);
  const [buyer, setBuyer] = useState(null);
  const [orders, setOrders] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const buyerId = await buyerContext.getBuyerId();
        const responseBuyer = await buyerContext.getBuyerById(buyerId);
        const responseOrders = await orderContext.getOrders(buyerId);
        setBuyer(responseBuyer.data.existingBuyer);
        setOrders(responseOrders.data.allOrders);
        console.log("buyer", responseBuyer.data.existingBuyer);
        console.log("allOrders", responseOrders.data.allOrders);
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
              {
                orders.map(order => (
                  <table key={order.id}>
                    <thead>
                      <tr>
                        <td>
                          <p>{order.id}</p>
                          <p>{convertDateTime(order.date_created)}</p>
                        </td>
                        {
                          order.order_status === "Delivered" ?
                            <td className='order-status-delivered'>
                              <p>{order.order_status} on</p>
                              <p>{convertDateTime(order.date_fulfilled)}</p>
                            </td> :
                            <td className='order-status'>
                              {order.order_status}
                            </td>
                        }
                      </tr>
                      <tr>
                        <td colSpan="100%">
                          {buyer.address}
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        order.order_items.map(order_item => (
                          <tr key={order_item.id}>
                            <td>
                              <img src={order_item.product.image_url} alt={order_item.product.name} />
                              <div>
                                <p>{order_item.product.name}</p>
                                <p>Quantity: {order_item.quantity}</p>
                              </div>
                            </td>
                            <td>
                              {order_item.quantity * order_item.product.price}
                            </td>
                          </tr>
                        ))
                      }
                    </tbody>
                    <tfoot>
                      <tr>
                        <td>Subtotal</td>
                        <td>{order.subtotal.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })}</td>
                      </tr>
                      <tr>
                        <td>Shipping Fee</td>
                        <td>{(order.shipping_cost * order.total_quantity).toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })}</td>
                      </tr>
                      <tr>
                        <td>Total Paid</td>
                        <td>{(order.subtotal + (order.shipping_cost * order.total_quantity)).toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })}</td>
                      </tr>
                    </tfoot>
                  </table>
                ))}

            </main>
          </div>
          <div id="profile-standard-view">
            <aside>
              <img src={buyer.image_url} alt={buyer.name} />
              <figcaption>
                <p>{buyer.first_name} {buyer.last_name}</p>
                <p>@{buyer.username}</p>
              </figcaption>
            </aside>
            <main>
              <h1>Order History</h1>
              {
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
                        {
                          order.date_fulfilled ?
                            <td>
                              Date Fulfilled:
                            </td> :
                            <td></td>
                        }
                      </tr>
                      <tr>
                        <td>
                          {order.id}
                        </td>
                        <td>
                          {convertDateTime(order.date_created)}
                        </td>
                        <td>
                          {buyer.address}
                        </td>
                        {
                          order.order_status === "Delivered" ?
                            <td className='order-status-delivered'>
                              {order.order_status}
                            </td> :
                            <td className='order-status'>
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
                            <td>
                              <p>{order_item.product.name}</p>
                              <p>Quantity: {order_item.quantity}</p>
                            </td>
                            <td>
                            </td>
                            <td>
                              {order_item.quantity * order_item.product.price}
                            </td>
                          </tr>
                        ))
                      }

                    </tbody>
                    <tfoot>
                      <tr>
                        <td>Subtotal</td>
                        <td>{order.subtotal.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })}</td>
                      </tr>
                      <tr>
                        <td>Shipping Fee</td>
                        <td>{(order.shipping_cost * order.total_quantity).toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })}</td>
                      </tr>
                      <tr>
                        <td>Total Paid</td>
                        <td>{(order.subtotal + (order.shipping_cost * order.total_quantity)).toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })}</td>
                      </tr>
                    </tfoot>
                  </table>
                ))
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