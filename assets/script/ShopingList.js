import React, { useState } from "react";

const ShopingList = () => {
  const [shoppingList, setShoppingList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItemToShoppingList = value => {
    setShoppingList([...shoppingList, value]);
    setInputValue("");
  };

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <div className="App">
      <ul>
        {shoppingList.map(item => (
          <li key={item}>
            {item}
            <button>remove</button>
          </li>
        ))}
      </ul>
      <input value={inputValue} onChange={handleInputChange} name="item" />
      <button onClick={() => addItemToShoppingList(inputValue)}>
        Add item
      </button>
    </div>
  );
};

export default ShopingList;

//mozliwosc usuwania z listy
//dodac licznik pozycji
