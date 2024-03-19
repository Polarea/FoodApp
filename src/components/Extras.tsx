import { useState } from "react";

interface Extras {
  name: string;
  quantity: number;
  onChange: (name: string, quantity: number) => void;
}
const extrasList: string[] = [
  "Aioli",
  "Patatas Bravas",
  "Gazpacho",
  "Albondigas",
  "Marinerade grönsaker",
  "Skaldjur",
];
export default function TapasExtras() {
  let xtras: Extras;
  const [extras, setExtras] = useState<Extras>({
    name: "",
    quantity: 0,
    onChange: (name, quantity) => {
      xtras = { ...xtras, name, quantity };
      setExtras(xtras);
    },
  });

  return (
    <div className="col">
      <h1>Tillbehör</h1>
      {extrasList.map((listItem) => {
        return (
          <div>
            <span>{listItem}:</span>
            <input
              type="number"
              value={extras.quantity}
              onChange={(e) =>
                extras.onChange(listItem, parseInt(e.target.value))
              }
            />
          </div>
        );
      })}
    </div>
  );
}
