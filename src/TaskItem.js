/** @format */

import React from 'react';
import { useState } from 'react';

const TaskItem = ({ setList }) => {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (event) => {
    // prevent the forms default behaviour
    event.preventDefault();
    // add the newItem to our list in App
    setList((currList) => {
      return [...currList, newItem];
    });
    // reset the input to be empty
    setNewItem('');
  };

  return (
    <div className="input">
      <h3>Add Task Item</h3>
      <form className='submit-task' onSubmit={handleSubmit}>
        <input
          required
          value={newItem}
          placeholder="Add new task item..."
          onChange={(event) => setNewItem(event.target.value)}
        />
        <button type="submit">Add item</button>
      </form>
    </div>
  );
};

export default TaskItem;
