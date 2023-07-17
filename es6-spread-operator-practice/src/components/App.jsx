import React, { useState } from "react";

function App() {
  let [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const value = event.target.value;
    setItem(value);
  }

  function handleClick() {
    if (item !== "") {
      const itemsMatched = items.filter((i) => {
        return i.name === item;
      });

      if (itemsMatched.length === 0) {
        setItems((prev) => {
          return [...prev, { key: prev.length - 1, name: item }];
        });
        setItem("");
      }
    }
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleChange}
          className="itemInput"
          type="text"
          value={item}
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li key={item.key}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
