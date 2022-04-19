import React, { useState } from "react";
import Item from "./item";

function App() {
  const [items, setItems] = useState([]);

  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button
          onClick={() => {
            addItem(inputText);
            setInputText("");
          }}
        >
          <span>Add</span>
        </button>
      </div>

      <div>
        <ul>
          {items.filter((val)=>{
            if(inputText == "") {
              return val
            } else if(val.toLowerCase().includes(inputText.toLowerCase())) {
              return val
            }
          }).map((todoItem, index) => (
            <Item
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
