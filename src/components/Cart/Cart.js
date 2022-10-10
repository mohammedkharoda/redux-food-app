import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";
const Cart = (props) => {
  const cartData = useSelector((state) => state.cartInfo.foodItem);
  const cartAmount = useSelector((state) => state.cartInfo.finalAmount);
  console.log(cartData);
  const foodItems = (
    <ul className={classes["cart-items"]}>
      {cartData.length > 0 &&
        cartData.map((item) => {
          return (
            item.quantity > 0 && (
              <CartItems
                key={item.id}
                id={item.id}
                name={item.name}
                amount={item.quantity}
                price={item.price}
              />
            )
          );
        })}
      );
    </ul>
  );
  return (
    <Modal>
      {foodItems}

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$ {cartAmount.toFixed(2)} </span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {cartData.length > 0 && (
          <button className={classes.button} onClick={classes.button}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
