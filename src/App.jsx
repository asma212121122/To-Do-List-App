import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Form from './components/Form';
import Edit from './components/Edit';
import List from './components/List';

function App() {
  // State
  const [items, setItems] = useState([]);

  // Event Handlers
  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const handleItemDone = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, complete: !item.complete } : item
    );
    setItems(updatedItems);
  };

  const editItem = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, isEditing: !item.isEditing } : item
    );
    setItems(updatedItems);
  };

  const editTask = (task, id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, nom: task, isEditing: false } : item
    );
    setItems(updatedItems);
  };

  // Rendering
  return (
    <div className="toDoListApp">
      <h1 className="title">Get Things Done</h1>
      <Form items={items} setItems={setItems} />
      <ul>
        {items.map((item) =>
          item.isEditing ? (
            <Edit
              key={item.id}
              item={item}
              editItem={editTask}
              items={items}
              setItems={setItems}
            />
          ) : (
            <List
              key={item.id}
              item={item}
              onItemDone={handleItemDone}
              onItemDelete={handleDelete}
              editItem={editItem}
            />
          )
        )}
      </ul>
    </div>
  );
}

export default App;
