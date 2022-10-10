import Header from "./components/Layout/Header";
import { useState } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showHandler = () => {
    setCartIsShown(true);
  };
  const hideHandler = () => {
    setCartIsShown(false);
  };
  return (
    <div>
      {cartIsShown && <Cart onClose={hideHandler} />}
      <Header onShowCart={showHandler} />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
