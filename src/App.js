import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals.js";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showComponentHandler = () => {
    setShowCart(true);
  };

  const hideComponentHandler = () => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      {showCart && <Cart onHideComponent={hideComponentHandler} />}
      <Header onShowComponent={showComponentHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
