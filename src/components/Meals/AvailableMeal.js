import React from "react";
import dummy_meal from "../../Store/AvailableMeals_Dummy";
import classes from "./AvailableMeal.module.css";
import Card from "../UI/Card";
import MealsItem from "./MealsItem/MealsItem";

const AvailableMeal = () => {
  console.log(dummy_meal);
  const meals = dummy_meal.map((meals) => (
    <MealsItem
      key={meals.id}
      name={meals.name}
      description={meals.description}
      price={meals.price}
      id={meals.id}
      amount={meals.amount}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{meals}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeal;
