import classes from "./CartItems.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Store/SliceCart";
const CartItem = (props) => {
  const dispatch = useDispatch();
  const price = `$${props?.price?.toFixed(2)}`;
  const addItemHandler = (event) => {
    dispatch(cartActions.addItemToCart(event.target.value));
  };
  const removeItemHandler = (event) => {
    dispatch(cartActions.removeItem(event.target.value));
  };
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={removeItemHandler} value={props.id}>
          -
        </button>
        <button onClick={addItemHandler} value={props.id}>
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
