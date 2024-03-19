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
    <div id="extras">
      <h1 id="headingExtras">Tillbehör</h1>
      {extrasList.map((listItem) => {
        return (
          <>
            <div id="extrasBox">
              <table id="extrasTable">
                <tbody>
                  <tr>
                    <td id="extrasNames">{listItem}:</td>
                    <td>
                      <input
                        id="inputExtras"
                        type="number"
                        value={extras.quantity}
                        onChange={(e) =>
                          extras.onChange(listItem, parseInt(e.target.value))
                        }
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        );
      })}
    </div>
  );
}
