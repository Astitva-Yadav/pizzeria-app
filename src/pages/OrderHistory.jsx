import React from 'react';
import { useOrder } from '../context/OrderContext';
import { useAuth } from '../context/AuthContext';
import './OrderHistory.css';

const OrderHistory = () => {
  const { orders } = useOrder();
  const { user } = useAuth();

  const userOrders = orders.filter(o => o.user === user?.username);

  if (!user) {
    return (
      <div className="history-page">
        <h2 className="text-center">Please login to view your order history.</h2>
      </div>
    );
  }

  if (userOrders.length === 0) {
    return (
      <div className="history-page">
        <div className="container text-center mt-5">
          <h2>No Past Orders</h2>
          <p className="text-muted">You haven't placed any orders yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="history-page">
      <div className="container">
        <h1 className="title-large text-center mb-5">Your Order History</h1>
        
        <div className="orders-list">
          {userOrders.map(order => (
            <div key={order.id} className="order-card glass-panel">
              <div className="order-header">
                <div>
                  <h3 className="order-id">Order #{order.id}</h3>
                  <span className="order-date">{new Date(order.date).toLocaleDateString()} at {new Date(order.date).toLocaleTimeString()}</span>
                </div>
                <div className="order-total">
                  Total: ₹{order.total.toFixed(2)}
                </div>
              </div>
              
              <div className="order-body">
                <div className="order-items">
                  <h4>Items</h4>
                  <ul>
                    {order.items.map(item => (
                      <li key={item.cartItemId}>
                        {item.quantity}x {item.name} - ₹{item.price * item.quantity}
                        {item.isCustom && <div className="order-toppings">Toppings: {item.toppings?.join(', ')}</div>}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="order-details">
                  <h4>Delivery Details</h4>
                  <p>{order.address.street}</p>
                  <p>{order.address.city}, {order.address.zip}</p>
                  
                  <h4 className="mt-3">Payment Info</h4>
                  <p>Method: {order.payment.method}</p>
                  <p>UPI ID: {order.payment.upiId}</p>
                </div>
              </div>
              <div className="order-footer mt-4 text-center">
                <button className="btn btn-secondary" onClick={() => window.print()}>Print Receipt</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
