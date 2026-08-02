import React, { useState, useEffect } from 'react';
import PizzaCard from '../components/PizzaCard';
import './OrderPizza.css';

const OrderPizza = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch pizzas from public folder
    fetch('/pizzas.json')
      .then(res => res.json())
      .then(data => {
        setPizzas(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load pizzas", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="menu-page container animate-fade-in">
      <div className="menu-header">
        <h1 className="title-large">Our Menu</h1>
        <p className="menu-subtitle">Choose from our authentic, handcrafted pizzas.</p>
      </div>
      
      {loading ? (
        <div className="loading-state">Loading menu...</div>
      ) : (
        <div className="pizza-grid">
          {pizzas.map(pizza => (
            <PizzaCard key={pizza.id} pizza={pizza} />
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderPizza;
