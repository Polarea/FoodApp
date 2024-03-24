import { useEffect, useRef, useState } from "react";
import "../App.css";

interface Cocktail {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
  quantity: number;
  price: number;
}

export interface Cocktails {
  drinks: Cocktail[];
}

const BASE_URL =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";

export default function Cocktail() {
  const [drinks, setDrinks] = useState<Cocktails>();
  const [drink, setDrink] = useState<Cocktail>();

  const index = useRef<number>(0);

  const fetchDrinks = async () => {
    const response = await fetch(`${BASE_URL}`);
    const _drinks = (await response.json()) as Cocktails;
    setDrinks(_drinks);
    setDrink(_drinks.drinks[index.current]);
  };

  const handleForwardClick = () => setDrink(drinks?.drinks[++index.current]);
  const handleBackwardClick = () =>
    index.current > 0 && setDrink(drinks?.drinks[--index.current]);

  useEffect(() => {
    fetchDrinks();
  }, []);

  return (
    <div className="container" id="drinkBox">
      <div className="row row-col-2">
        <div className="col" id="drinkColumn">
          <h1 id="drinkTitle" key={drink?.strDrink}>
            {drinks?.drinks[index.current].strDrink}
          </h1>
          <img
            src={drink?.strDrinkThumb}
            alt={drink?.strDrink}
            key={drink?.strDrinkThumb}
            id="drinkImage"
          />
          <div id="drinkButtons">
            <button
              type="button"
              key={drink?.idDrink + "1"}
              onClick={handleForwardClick}
              id="buttonForward"
            >
              Forward
            </button>
            <button
              type="button"
              key={drink?.idDrink + "2"}
              id="buttonBackward"
              onClick={handleBackwardClick}
            >
              Backward
            </button>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}
