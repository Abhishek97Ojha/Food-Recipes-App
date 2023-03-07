import React, { useContext } from "react";
import "./Cards.css";

import { MyContext } from "../App";

const Cards = () => {
  const context = useContext(MyContext);
  return (
    <div className="cards">
      {context.items.map((ele) => {
        // console.log(ele.recipe);
        return (
          <div className="card">
            <h2>{ele.recipe.label}</h2>
            <div className="image">
              <img src={ele.recipe.image} alt="" />
            </div>
            <h3>Calories : {ele.recipe.calories.toFixed(2)}Kcal</h3>
            
            {/* {ele.recipe.cuisineType.map((e,i) => {
                return <h3 key={i}>Cuisine :  {e} </h3>
              })} */}
            
             
            {/* {ele.recipe.dishType.map((e,i) => {
                return <h3 key={i}>Dish Type : {e} </h3>
              })} */}
            
            <h4 >Ingredients :</h4>
            <ul>
              {ele.recipe.ingredientLines.map((e,i) => {
                return <li key={i}>{e}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
