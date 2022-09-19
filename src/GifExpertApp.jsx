import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

  const [categories, setCategories] =useState(['Pikachu']);
  const onAddCategory = newCategory => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory
          // setCategories={setCategories}
          onNewCategory={ event => onAddCategory(event)}
        />
        
        <ol>
          {
          categories.map( category => {
            return <li key={category}>{category}</li>
          })
          }
        </ol>
    </>
  )
}
