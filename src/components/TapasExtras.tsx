import { ChangeEvent, useState } from "react";

export interface Extras {
  name: string;
  quantity: number;
  price: number;
}

export default function TapasExtras() {
  const extrasList: Extras[] = [
    { name: "Aioli", quantity: 0, price: 79 },
    { name: "Patatas Bravas", quantity: 0, price: 129 },
    { name: "Gazpacho", quantity: 0, price: 99 },
    { name: "Albondigas", quantity: 0, price: 49 },
    { name: "Marinerade grönsaker", quantity: 0, price: 89 },
    { name: "Skaldjur", quantity: 0, price: 159 },
  ];

  const [xtras, setXtras] = useState<[string, number]>();

  return (
    <div id="extrasBox">
      <h1 id="headingExtras">Tillbehör</h1>
      <div id="extrasContainer">
        {extrasList.map((listItem) => {
          return (
            <>
              <span id="extrasNames" key={listItem.name}>
                {listItem.name}:
              </span>
              <span id="extrasPrice" key={listItem.name + "1"}>
                {listItem.price}SEK
              </span>
              <span id="inputSpan">
                <input
                  id="inputExtras"
                  type="number"
                  placeholder="0"
                  min={0}
                  onChange={(e) => {
                    setXtras([listItem.name, parseInt(e.target.value)]);
                  }}
                />
              </span>
            </>
          );
        })}
      </div>
    </div>
  );
}
