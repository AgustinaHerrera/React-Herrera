import { useState } from "react";
import "../NavBar/NavBar.css";

const ItemCount = ({ onAdd }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <button className="btn" onClick={decrement}>
        -
      </button>
      <p>{count}</p>
      <button className="btn" onClick={increment}>
        +
      </button>
      <button className="btn2" onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
