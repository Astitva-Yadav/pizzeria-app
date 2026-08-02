import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Trash2, Minus, Plus } from 'lucide-react';
import './Cart.css';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, cartTotalAmount, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    // Navigate to new checkout flow
    navigate('/checkout');
  };

  const handleClear = () => {
    clearCart();
  };

  // Mock calculating ingredients cost vs pizza cost
  const pizzaCost = cartItems.reduce((acc, item) => item.isCustom ? acc : acc + (item.price * item.quantity), 0);
  const ingredientsCost = cartItems.reduce((acc, item) => item.isCustom ? acc + (item.price * item.quantity) : acc, 0);

  if (cartItems.length === 0) {
    return (
      <div className="cart-page-exact">
        <h2 style={{color: '#333'}}>Your Cart is Empty</h2>
      </div>
    );
  }

  return (
    <div className="cart-page-exact">
      <div className="cart-container-exact">
        <div className="cart-left">
          <div className="cart-box">
            <div className="cart-box-header">
              <h2>My Cart</h2>
            </div>
            <div className="cart-items">
              {cartItems.map(item => {
                const isVeg = item.type === 'veg';
                return (
                  <div key={item.cartItemId} className="cart-row">
                    <img src={item.image} alt={item.name} className="cart-item-img-ex" onError={(e) => { e.target.src = '/orderpizza.jpeg' }} />
                    <div className={`cart-veg-icon ${isVeg ? 'veg' : 'non-veg'}`}></div>
                    
                    <div className="cart-item-name-col">
                      <div className="item-name">{item.name}</div>
                      <div className="item-unit-price">₹{item.price}</div>
                    </div>

                    <div className="cart-qty-col">
                      <button className="qty-btn-ex" onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                      <span className="qty-val-ex">{item.quantity}</span>
                      <button className="qty-btn-ex" onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}>+</button>
                    </div>

                    <div className="cart-item-total-ex">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </div>

                    <button className="delete-btn-ex" onClick={() => removeFromCart(item.cartItemId)}>
                      <Trash2 size={16} color="red" />
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="cart-subtotal">
              Sub Total : ₹{cartTotalAmount.toFixed(2)}
            </div>
          </div>
        </div>

        <div className="cart-right">
          <div className="cart-box">
            <div className="cart-box-header">
              <h2>The total amount of</h2>
            </div>
            <div className="cart-summary-body">
              <div className="sum-row">
                <span>Pizza</span>
                <span>₹{pizzaCost.toFixed(2)}</span>
              </div>
              <div className="sum-row">
                <span>Ingredients v</span>
                <span>₹{ingredientsCost.toFixed(2)}</span>
              </div>
              <div className="sum-total">
                <span>Total : </span>
                <span>₹{cartTotalAmount.toFixed(2)}</span>
              </div>
            </div>
          </div>
          
          <div className="cart-actions-ex">
            <button className="pay-btn" onClick={handleCheckout}>Pay</button>
            <button className="clear-btn" onClick={handleClear}>Clear</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
