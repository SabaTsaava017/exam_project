const AddItemContainer = ({
    index,
    handleCheckboxChange,
    handleDeleteItem,
    checked,
    value,
  }) => {
    return (

      <div style={{ display: "flex" }} key={index}>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => handleCheckboxChange(index)}
        />
        <li
          style={{
            listStyle: "none",
            textDecoration: checked ? "line-through" : "none",
          }}
        >
          {value}
        </li>
        <button onClick={() => handleDeleteItem(value)}>Delete</button>
      </div>
    );
  };
  
  export default AddItemContainer;