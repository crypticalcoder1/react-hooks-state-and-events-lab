// src/components/Item.js
import React, { useState } from 'react';

function Item({ name, category }) {
  // State to track whether the item is in the cart
  const [inCart, setInCart] = useState(false);

  // Handler function for button click
  const handleClick = () => {
    setInCart(prevInCart => !prevInCart); // Toggle inCart state
  };

  return (
    <li className={inCart ? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
        className="add" 
        onClick={handleClick}
      >
        {inCart ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );
}

export default Item;
