import classes from "./MealsItemForm.module.css";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { cartActions } from "../../../Store/SliceCart";

const MealItemForm = (props) => {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const foodData = {
      id: props.items.id,
      name: props.items.name,
      price: props.items.price,
      quantity: inputRef.current.value, 
    };
    console.log("CART DATA===>>", foodData);
    dispatch(cartActions.addFoodToCart(foodData));
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input
        ref={inputRef}
        type="number"
        step="1"
        min="1"
        max="5"
        defaultValue="1"
      />
      <button> + Add</button>
    </form>
  );
};

export default MealItemForm;
