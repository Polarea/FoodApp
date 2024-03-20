import { useEffect, useState } from "react";
import "../App.css";
import TapasExtras from "./TapasExtras";

const BASE_URL = "https://iths-2024-recept-grupp7-86oop6.reky.se/recipes";

interface Menu {
  imageUrl: string;
  title: string;
  description: string;
  categories: string[];
}

export default function Menu() {
  const [MenuItems, setMenuItems] = useState<Menu[]>([]);
  const [menuItem, setMenuItem] = useState<Menu>();

  const fetchMenu = async () => {
    const response = await fetch(`${BASE_URL}`);
    const menuItems = (await response.json()) as Menu[];
    setMenuItems(menuItems);
    setMenuItem(menuItems[0]);
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
              {MenuItems.map((menuItem, index) => {
                return (
                  <li key={index++}>
                    <img
                      key={menuItem.title + index}
                      src={menuItem.imageUrl}
                      alt={menuItem.title}
                      id="thumbnail"
                      onMouseOver={() => setMenuItem(menuItem)}
                    />
                    <div key={index} id="thumbnailText">
                      {menuItem.title}
                    </div>
                  </li>
                );
              })}
            </ul>
          </center>
        </div>
        <div className="col" id="menuItem">
          <center>
            <div id="taptini">Tap&Tini</div>
          </center>
          <img
            id="menuItemImage"
            key={menuItem?.imageUrl}
            src={menuItem?.imageUrl}
            alt={menuItem?.title}
          />
          <div id="descriptionTitle" key={menuItem?.title}>
            {menuItem?.title}
          </div>
          <div id="itemDescription" key={menuItem?.description}>
            {menuItem?.description}
          </div>
          <div id="categories">
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
          </div>
        </div>
        <div className="col" id="extras">
          <TapasExtras />
        </div>
      </div>
    </div>
  );
}
