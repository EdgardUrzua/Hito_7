import { useCart } from "../context/CartContext";

function CardPizza({ id, nombre, descripcion, precio, imagen, ingredientes }) {
  const { addToCart } = useCart();

  return (
    <div className="card">
      <img src={imagen} className="card-img-top" alt={nombre} />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">Descripción: {descripcion}</p>
        <p className="card-text">Ingredientes: {ingredientes.join(", ")}</p>
        <p className="card-text">${precio}</p>
        <button className="btn btn-dark" onClick={() => addToCart({ id, nombre, precio, imagen })}>
          🛒 Añadir
        </button>
      </div>
    </div>
  );
}

export default CardPizza;




