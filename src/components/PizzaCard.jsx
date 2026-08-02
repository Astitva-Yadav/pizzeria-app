import React from 'react';
import { useCart } from '../context/CartContext';
import './PizzaCard.css';

const PizzaCard = ({ pizza }) => {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart({
      cartItemId: `menu_${pizza.id}_${Date.now()}`,
      id: pizza.id,
      name: pizza.name,
      price: parseInt(pizza.price),
      image: pizza.image,
      type: pizza.type,
      isCustom: false
    });
  };

  const isVeg = pizza.type === 'veg';

  return (
    <div className="exact-pizza-card">
      <div className="exact-col-1">
        <h3 className="exact-pizza-name">{pizza.name}</h3>
        <div className={`exact-veg-icon ${isVeg ? 'veg' : 'non-veg'}`}></div>
        <div className="exact-pizza-price">₹{parseFloat(pizza.price).toFixed(2)}</div>
      </div>
      
      <div className="exact-col-2">
        <p className="exact-pizza-desc">{pizza.description}</p>
        <div className="exact-detail">
          <strong>Ingredients : </strong>
          <span>{pizza.ingredients.join(', ')}</span>
        </div>
        <div className="exact-detail">
          <strong>Toppings : </strong>
          <span>{pizza.topping.join(', ')}</span>
        </div>
      </div>

      <div className="exact-col-3">
        <img src={pizza.image} alt={pizza.name} className="exact-pizza-img" onError={(e) => { e.target.src = '/orderpizza.jpeg' }} />
        <button className="exact-add-btn" onClick={handleAdd}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default PizzaCard;
