import { useState } from "react";
import { Menu } from "./Menu";
import { Extras } from "./TapasExtras";
import { Cocktail } from "./Cocktail";

export interface Cart {
  tapas: Menu[];
  extras: Extras[];
  cocktails: Cocktail[];
}

let setCart = (value: Cart) => {};
let cart: Cart | undefined = undefined;

export const CartContext = {
  cart,
  setCart,
};

export function Cart_() {
  [cart, setCart] = useState<Cart>();
  const [total, setTotal] = useState(0);

  return (
    <div>
      <h1>Cart</h1>
      <table>
        <thead></thead>
        <tbody>
          <th>
            <tr>
              <td>Item</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Total</td>
            </tr>
          </th>
          {cart?.tapas.map((food) => {
            setTotal(food.price * food.quantity);
            return (
              <tr>
                <td key={food.title} id="cartTapas">
                  {food.title}{" "}
                  <img
                    src={food.imageUrl}
                    id="cartThumbnail"
                    key={food.imageUrl}
                  />
                </td>
                <td key={food.title + "3"}>{food.price}</td>
                <td key={food.title + "2"}>{food.quantity}</td>
                <td key={food.title + "1"}>{total}</td>
              </tr>
            );
          })}
          {cart?.extras.map((extra) => {
            setTotal(total + extra.price * extra.quantity);
            return (
              <tr>
                <td key={extra.name + "4"}>{extra.name}</td>
                <td key={extra.name + "3"}>{extra.price}</td>
                <td key={extra.name + "2"}>{extra.quantity}</td>
                <td key={extra.name + "1"}>{extra.price * extra.quantity}</td>
              </tr>
            );
          })}
          {/* {cart?.cocktails.map((drink) => {
            setTotal(total + drink.price * drink.quantity);
            return (
              <tr>
                <td key={drink.strDrink} id="drinkName">
                  {drink.strDrink}{" "}
                  <img src={drink.strDrinkThumb} key={drink.strDrinkThumb} />
                </td>
                <td key={drink.idDrink + "2"}>{drink.price}</td>
                <td key={drink.idDrink + "1"}>{drink.quantity}</td>
                <td key={drink.idDrink}>{drink.price * drink.quantity}</td>
              </tr>
            );
          })} */}
          <tr>
            <td colSpan={3}>Grand Total</td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
