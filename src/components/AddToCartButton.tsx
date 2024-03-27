import { useState } from "react";
import { Cart } from "./Cart";

export let cartItems: Cart;
export let setCartItems = (value: Cart) => {};

export function AddToCart({ tapas, extras, cocktails }: Cart) {
  [cartItems, setCartItems] = useState<Cart>({
    tapas: [],
    extras: [],
    cocktails: [],
  });
  const handleOnClick = () => {
    setCartItems({
      tapas: [...cartItems?.tapas, ...tapas],
      extras: [...cartItems?.extras, ...extras],
      cocktails: [...cartItems?.cocktails, ...cocktails],
    });
  };
  return (
    <button id="addToCartButton" type="button" onClick={handleOnClick}>
      Lägg till i varukorgen
    </button>
  );
}
