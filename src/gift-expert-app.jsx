import React, { useState } from "react";
import { AddCategory, GifGrid }  from "./components";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);
  //console.log(categories);

  const onAddCategory = (newCategory) => {

    //validacion
    if (categories.includes(newCategory)) {
        return;
    }
    console.log(newCategory);
    //añadir elementos al array
    //categories.push(newCategory);
    /**
     * SE DESETRUCTURA EL ARRAY Y SE AÑADE EL NUEVO ELEMENTO
     */
    setCategories( [newCategory, ...categories]);
    //setCategories(categories => [...categories, 'Valorant']);
  }

  return (
    <>
      {/* TITULO */}
      <h1>GiftExpertApp</h1>
      {/* INPUT */}
      <AddCategory 
      //setCategories={ setCategories }
      onNewCategory = {event => onAddCategory(event)}
      
      /**
       * modo simplifacdo al ser el mismo evento el que se 
       * envia en la funcion
       * onNewValue = { onAddCategory }
       */
      />

      {/* LISTADO DE ITEMS/GIFTS */}

      {/* LIST ITEMS */}
      <ol>
        {categories.map( (category) => (<GifGrid 
        key = {category}
        category={ category }/>))}
      </ol>
    
    </>
  );
};
