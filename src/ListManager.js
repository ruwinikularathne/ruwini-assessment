import React, { useState } from 'react';

const ListManager = () => {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setError('');
  };

  const handleAddItem = () => {
    if (inputValue.trim() === '') {
      setError('Please enter an item.');
      return;
    }
    setItems([...items, { value: inputValue, animate: true }]);
    setInputValue('');
    setTimeout(() => {
      setItems(items => items.map(item => ({ ...item, animate: false })));
    }, 200); 
  };

  const handleRemoveItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter an item"
      />
      <button onClick={handleAddItem}>Add</button>
      <ul>
        {items.map((item, index) => (
          <li key={index} className={item.animate ? "animate-item" : ""}>
            <span>{item.value}</span>
            <button onClick={() => handleRemoveItem(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListManager;
