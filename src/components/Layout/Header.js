// import HeaderCartButton from "./HeaderCartButton";
import mealImage from "../../assets/davide-cantelli-jpkfc5_d-DI-unsplash.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Food</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="A table full of delicious food" />
      </div>
    </>
  );
};
export default Header;
