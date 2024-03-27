import { useEffect, useState } from "react";
import "../App.css";
import TapasExtras, { Extras } from "./TapasExtras";
import { AddToCart } from "./AddToCartButton";

const BASE_URL = "https://iths-2024-recept-grupp7-86oop6.reky.se/recipes";

export interface Menu {
  imageUrl: string;
  title: string;
  description: string;
  categories: string[];
  price: number;
  quantity: number;
}

export default function Menu() {
  const [MenuItems, setMenuItems] = useState<Menu[]>([]);
  const [MenuItem, setMenuItem] = useState<Menu[]>([]);
  const [extras, setExtras] = useState<Extras[]>([]);

  const fetchMenu = async () => {
    const response = await fetch(`${BASE_URL}`);
    const menuItems = (await response.json()) as Menu[];
    setMenuItems(menuItems);
    setMenuItem([menuItems[0]]);
  };
  useEffect(() => {
    fetchMenu();
  }, []);

  return (
    <div className="container" id="box">
      <div className="row row-col-3">
        <div className="col" id="menu">
          <center>
            <h1 id="headingMenu">Menu</h1>
            <ul id="list">
              {MenuItems.map((menuItem) => {
                return (
                  <li key={menuItem.imageUrl + "1"}>
                    <img
                      key={menuItem.imageUrl + "2"}
                      src={menuItem.imageUrl}
                      alt={menuItem.title}
                      id="thumbnail"
                      onMouseOver={() => setMenuItem([menuItem])}
                    />
                    <div key={menuItem.imageUrl + "3"} id="thumbnailText">
                      {menuItem.title}
                    </div>
                  </li>
                );
              })}
            </ul>
          </center>
        </div>
        <div className="col" id="menuItem">
          <div id="taptini">Tap&Tini</div>
          <img
            id="menuItemImage"
            key={MenuItem[0]?.imageUrl}
            src={MenuItem[0]?.imageUrl}
            alt={MenuItem[0]?.title}
          />
          <div id="descriptionTitle" key={MenuItem[0]?.title}>
            {MenuItem[0]?.title}
          </div>
          <div id="itemDescription" key={MenuItem[0]?.description}>
            {MenuItem[0]?.description}
          </div>
          <div id="price" key={MenuItem[0]?.price.toString()}>
            {MenuItem[0]?.price.toString()} SEK
          </div>
          {/* <div id="categories">
            Categories:
            <br />
            {menuItem?.categories.map((category) => {
              return (
                <>
                  {category}
                  <br />
                </>
              );
            })}
          </div> */}
        </div>
        <div className="col" id="extras">
          <TapasExtras setExtrasValue={setExtras} extrasValue={extras} />
          <AddToCart tapas={MenuItem} extras={extras} cocktails={[]} />
        </div>
      </div>
    </div>
  );
}
