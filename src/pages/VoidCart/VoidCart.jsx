import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

function VoidCart() {
  return (
    <div>
      <div className="container-void-cart">
        <FiShoppingCart className="void-cart" />
        <h2>Tu Carro está vacío</h2>
        <p>
          Tenemos miles de ofertas y oportunidades únicas, ¿te las vas a perder?
        </p>
        <Link to={"/"}>Ir al inicio</Link>
      </div>
    </div>
  );
}

export default VoidCart;
