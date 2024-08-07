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
    setItems([...items, inputValue]);
    setInputValue('');
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
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <span>{item}</span> {/* Text will naturally align to the left */}
            <button onClick={() => handleRemoveItem(index)}>X</button> {/* Button will align to the right */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListManager;
