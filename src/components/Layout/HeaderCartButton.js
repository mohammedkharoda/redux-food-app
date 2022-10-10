import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useSelector } from "react-redux";
const HeaderCartButton = (props) => {
  const cartSelector = useSelector((state) => state.cartInfo);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartSelector.finalQuantity}</span>
    </button>
  );
};

export default HeaderCartButton;
