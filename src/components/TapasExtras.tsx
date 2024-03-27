import { ChangeEvent, useState } from "react";

export interface Extras {
  name: string;
  quantity: number;
  price: number;
}
interface extrasProps {
  setExtrasValue: (value: Extras[]) => void;
  extrasValue: Extras[];
}
// const handleOnChange = (
//   e: ChangeEvent<HTMLInputElement>,
//   props: extrasProps,
//   input: Extras
// ) => {
//   const xtras: Extras = {
//     name: input.name,
//     price: input.price,
//     quantity: parseInt(e.target.value),
//   };
//   if (xtras.quantity > 0) {
//     props.extrasValue.map((oldValue) => {
//       if (oldValue.name === xtras.name) {
//         props.setExtrasValue([
//           {
//             name: oldValue.name,
//             price: oldValue.price,
//             quantity: xtras.quantity,
//           },
//         ]);
//       } else {
//         props.setExtrasValue([...props.extrasValue, xtras]);
//       }
//     });
//   }
// };

const extrasItems: Extras[] = [
  { name: "Aioli", quantity: 0, price: 79 },
  { name: "Patatas Bravas", quantity: 0, price: 129 },
  { name: "Gazpacho", quantity: 0, price: 99 },
  { name: "Albondigas", quantity: 0, price: 49 },
  { name: "Marinerade grönsaker", quantity: 0, price: 89 },
  { name: "Skaldjur", quantity: 0, price: 159 },
];

export default function TapasExtras(props: extrasProps) {
  const [extra, setExtra] = useState<Extras>();
  return (
    <div id="extrasBox">
      <h1 id="headingExtras">Tillbehör</h1>
      <div id="extrasContainer" key="extras11">
        {extrasItems.map((items) => {
          return (
            <>
              <span id="extrasNames" key={items.name}>
                {items.name}:
              </span>
              <span id="extrasPrice" key={items.name + "1"}>
                {items.price}SEK
              </span>
              <span id="inputSpan" key={items.name + "2"}>
                <input
                  id="inputExtras"
                  type="number"
                  placeholder="0"
                  min={0}
                  onChange={(e) => {
                    const xtras: Extras = {
                      name: items.name,
                      price: items.price,
                      quantity: parseInt(e.target.value),
                    };
                    if (xtras.quantity > 0) {
                      setExtra(xtras);
                      props.setExtrasValue([...props.extrasValue, xtras]);
                    }
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
