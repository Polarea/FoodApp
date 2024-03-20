import { ChangeEvent, useState } from "react";

interface Extras {
  name: string;
  quantity: number;
}

export default function TapasExtras() {
  const extrasList: Extras[] = [
    { name: "Aioli", quantity: 0 },
    { name: "Patatas Bravas", quantity: 0 },
    { name: "Gazpacho", quantity: 0 },
    { name: "Albondigas", quantity: 0 },
    { name: "Marinerade grönsaker", quantity: 0 },
    { name: "Skaldjur", quantity: 0 },
  ];

  const [xtras, setXtras] = useState<[string, number]>();

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
                    <td id="extrasNames" key={listItem.name}>
                      {listItem.name}:
                    </td>
                    <td>
                      <input
                        id="inputExtras"
                        type="number"
                        placeholder="0"
                        min={0}
                        onChange={(e) => {
                          setXtras([listItem.name, parseInt(e.target.value)]);
                        }}
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
