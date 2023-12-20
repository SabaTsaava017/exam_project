import React, { useState } from "react";
import AddItemContainer from "./AddItem";

export default function App() {
  const [value, setValue] = useState("");
  const [array, setArray] = useState([]);

  const handleAddTodoItem = () => {
    if (value === "") {
      alert("Input is required!");
    } else {
      setArray((prev) => [...prev, { value, checked: false }]);
      localStorage.setItem("todo_app", value);
      setValue("");
    }
  };

  const handleDeleteItem = (todoItem) => {
    const deletedItem = array.find((item) => item.value === todoItem);

    if (deletedItem && deletedItem.checked === false) {
      alert("You should check your list first");
    } else {
      setArray((prev) => prev.filter((item) => item.value !== todoItem));
    }
  };

  const handleCheckboxChange = (index) => {
    setArray((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div>
      <button>Dark/Light</button>
      <h1>Todo App</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleAddTodoItem}>Add</button>
      <div>
        {array.map((item, index) => (
          <AddItemContainer
            checked={item.checked}
            value={item.value}
            index={index}
            handleCheckboxChange={handleCheckboxChange}
            handleDeleteItem={handleDeleteItem}
          />
        ))}
      </div>
      <AddItemContainer />
    </div>
  );
}





