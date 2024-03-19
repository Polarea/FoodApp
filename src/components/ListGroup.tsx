import { useState } from "react";
interface Props {
  items: string[];
  heading: string;
  onSeletItem: (item: string) => void;
}
function ListGroup({ items, heading, onSeletItem }: Props) {
  const [selectedItem, setSelectedItem] = useState(-1);
  const condition = items.length === 0 && <p>No item found</p>;
  return (
    <>
      <h1>List</h1>
      {condition}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedItem(index);
              onSeletItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
