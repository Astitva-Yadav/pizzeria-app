import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useOrder } from '../context/OrderContext';
import './Checkout.css';

const Checkout = () => {
  const { cartItems, cartTotalAmount, clearCart } = useCart();
  const { user } = useAuth();
  const { addOrder } = useOrder();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [address, setAddress] = useState({
    street: '',
    city: '',
    zip: ''
  });
  const [upiId, setUpiId] = useState('');

  
  const [purchasedItems, setPurchasedItems] = useState([]);
  const [purchasedTotal, setPurchasedTotal] = useState(0);

  const merchantUpi = 'py562535-2okaxis';

  if (!user || (step === 1 && cartItems.length === 0)) {
    return (
      <div className="checkout-page">
        <div
          className="checkout-container text-center"
          style={{ marginTop: '100px' }}
        >
          <div className="checkout-step glass-panel text-center">
            <h2>Nothing to Checkout</h2>
            <p className="text-muted mb-4">
              Your cart is empty or you need to log in.
            </p>
            <button
              className="checkout-btn"
              onClick={() => navigate('/cart')}
            >
              Back to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();

    
    setPurchasedItems(cartItems);
    setPurchasedTotal(cartTotalAmount);

    const newOrder = {
      items: cartItems,
      total: cartTotalAmount + 50 + cartTotalAmount * 0.05,
      address,
      user: user.username,
      payment: {
        method: 'UPI',
        upiId
      }
    };

    addOrder(newOrder);

    clearCart();

    
    setStep(3);

  
    setTimeout(() => {
      navigate('/history');
    }, 60000);
  };

  return (
    <div className="checkout-page">
      <div className="checkout-container">

        {step === 1 && (
          <div className="checkout-step glass-panel">
            <h2>Delivery Address</h2>

            <form onSubmit={handleAddressSubmit} className="checkout-form">

              <div className="input-group">
                <label>Street Address</label>
                <input
                  type="text"
                  value={address.street}
                  onChange={(e) =>
                    setAddress({ ...address, street: e.target.value })
                  }
                  required
                />
              </div>

              <div className="input-group">
                <label>City</label>
                <input
                  type="text"
                  value={address.city}
                  onChange={(e) =>
                    setAddress({ ...address, city: e.target.value })
                  }
                  required
                />
              </div>

              <div className="input-group">
                <label>ZIP Code</label>
                <input
                  type="text"
                  value={address.zip}
                  onChange={(e) =>
                    setAddress({ ...address, zip: e.target.value })
                  }
                  required
                />
              </div>

              <button
                type="submit"
                className="checkout-btn"
              >
                Save Address & Proceed
              </button>

            </form>
          </div>
        )}

        {step === 2 && (
          <div className="checkout-step glass-panel">
            <h2>Payment Details</h2>

            <div className="payment-info">
              <p>
                Amount to Pay:
                <strong>
                  ₹{(cartTotalAmount + 50 + cartTotalAmount * 0.05).toFixed(2)}
                </strong>
              </p>

              <p className="merchant-upi">
                Pay to Merchant UPI ID:
                <strong> {merchantUpi}</strong>
              </p>
            </div>

            <form onSubmit={handlePaymentSubmit} className="checkout-form mt-4">

              <div className="input-group">
                <label>Enter your UPI ID</label>

                <input
                  type="text"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  placeholder="e.g. username@bank"
                  required
                />
              </div>

              <button
                type="submit"
                className="checkout-btn"
              >
                Confirm Payment
              </button>

            </form>
          </div>
        )}

        {step === 3 && (
          <div className="checkout-step glass-panel success-step text-center">

            <h2 className="success-title">
              Payment Approved! 🎉
            </h2>

            <p>Your order has been placed successfully.</p>

            <p style={{ color: '#666', marginTop: '10px' }}>
             
            </p>

            <h4 style={{ marginTop: '20px' }}>
              Total Paid: ₹
              {(purchasedTotal + 50 + purchasedTotal * 0.05).toFixed(2)}
            </h4>

            <div className="success-actions mt-4">

              <button
                className="btn btn-secondary"
                onClick={() => window.print()}
              >
                Print Order
              </button>

              <button
                className="btn btn-primary"
                onClick={() => navigate('/history')}
              >
                View Order History
              </button>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default Checkout;