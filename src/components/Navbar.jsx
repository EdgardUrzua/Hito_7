import { useContext } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext"; // Importa el contexto de usuario
import formatCurrency from "../utils/formatCurrency";

function Navbar() {
  const { token, logout } = useUser(); // Obtiene el token y el método logout
  const { total } = useCart();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          🍕 Home
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {token ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">
                    🔓 Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn" onClick={logout}>
                    🔒 Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    🔐 Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="navbar-link" to="/register">
                    🔐 Registro
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link to="/cart">
          <button className="btn btn-outline-primary">
            🛒 Total: {formatCurrency(total)}
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

