import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, name, img, price }) => {
  return (
    <article className="Item">
      <header>
        <h2>{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>
      <section>
        <h3>Precio: ${price}</h3>
      </section>
      <footer className="Text">
        <Link to={`/detail/${id}`} className="Option">
          Ver detalle
        </Link>
      </footer>
    </article>
  );
};

export default Item;
