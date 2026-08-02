import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import './BuildPizza.css';

const BuildPizza = () => {
  const [ingredients, setIngredients] = useState([]);
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch('/ingredients.json')
      .then(res => res.json())
      .then(data => {
        setIngredients(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load ingredients", err);
        setLoading(false);
      });
  }, []);

  const handleToggleTopping = (ingredient) => {
    if (selectedToppings.find(t => t.id === ingredient.id)) {
      setSelectedToppings(selectedToppings.filter(t => t.id !== ingredient.id));
    } else {
      setSelectedToppings([...selectedToppings, ingredient]);
    }
  };

  const calculateTotal = () => {
    return selectedToppings.reduce((total, topping) => total + topping.price, 0);
  };

  const handleAddToCart = () => {
    const customPizza = {
      cartItemId: `custom_${Date.now()}`,
      id: 'custom',
      name: 'Custom Built Pizza',
      price: calculateTotal(),
      image: '/Ingredients.jpg', 
      type: 'custom',
      isCustom: true,
      toppings: selectedToppings.map(t => t.tname)
    };
    addToCart(customPizza);
    setSelectedToppings([]);
  };

  return (
    <div className="build-page-exact">
      <p className="build-desc">
        Pizzeria now gives you options to build your own pizza. Customize your pizza by choosing ingredients from the list given below
      </p>

      {loading ? (
        <div>Loading ingredients...</div>
      ) : (
        <div className="build-table-container">
          <table className="ingredients-table">
            <tbody>
              {ingredients.map(ing => {
                const isSelected = selectedToppings.find(t => t.id === ing.id);
                return (
                  <tr key={ing.id}>
                    <td className="img-cell">
                      <img src={ing.image} alt={ing.tname} />
                    </td>
                    <td className="info-cell">
                      <strong>{ing.tname}</strong> &nbsp; ₹{ing.price.toFixed(2)}
                    </td>
                    <td className="action-cell">
                      <label className="add-checkbox">
                        <input 
                          type="checkbox" 
                          checked={!!isSelected}
                          onChange={() => handleToggleTopping(ing)}
                        />
                        <span className="add-text">Add</span>
                      </label>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          
          <div className="total-cost">
            Total Cost : {calculateTotal()}
          </div>

          <div className="build-btn-container">
            <button className="build-ur-pizza-btn" onClick={handleAddToCart}>
              Build Ur Pizza
            </button>
          </div>
        </div>
      )}
      
      <footer className="pizzeria-footer">
        Copyrights @ 2017 Pizzeria. All rights reserved.
      </footer>
    </div>
  );
};

export default BuildPizza;
