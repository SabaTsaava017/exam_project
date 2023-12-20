import { useState } from "react";

const AddItemContainer = ({}) => {
  const [getItems, setGetItems] = useState("");
  const [showItems, setShowItems] = useState(false);

  const handleAddItem = () => {
    const myItems = localStorage.getItem("todo_app");
    setGetItems(myItems);
    return myItems;
  };

  return (
    <div>
      <button onClick={handleAddItem}>getItem</button>
      <h1>
        {!showItems && getItems}
        {!showItems && (
          <button
            onClick={() => {
              localStorage.removeItem("todo_app");
              setShowItems(true);
            }}
          >
            X
          </button>
        )}
      </h1>
    </div>
  );
};

export default AddItemContainer;