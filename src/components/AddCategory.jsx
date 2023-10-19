import React, { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  //cada componente puede tener su propio estado
  const [inputValue, setInputValue] = useState('');

  const onInputChage = ({ target }) => {
    //console.log(target.value);
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) {
      return;
    }
    onNewCategory(inputValue.trim());
    //añadimos elementos al array 
    //setCategories((categories) => [inputValue, ...categories]);
    //limpiamos caja de texto
    setInputValue('');
  };

  return (
    <form action="" onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="buscar gifs..."
        value={inputValue}
        onChange={(event) => onInputChage(event)}
      />
    </form>
  );
};
