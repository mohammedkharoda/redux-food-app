/* eslint-disable no-unreachable */
import classes from "./MealsItem.module.css";
import MealItemForm from "./MealsItemForm";
import React from "react";
const MealsItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <>
      <li className={classes.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <div>
          <MealItemForm items={props} />
        </div>
      </li>
    </>
  );
};

export default MealsItem;
