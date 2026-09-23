import { Link, NavLink } from "react-router";
import { FiSearch, FiHeart, FiShoppingCart, FiShoppingBag, FiUser } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";

const Header = () => {
  const { totalCount } = useCart();
  const { favorites } = useFavorites();

  return (
    <header className="header">
        <Link to="/" className="logo"><FiShoppingBag /> ReactShop</Link>

        <ul className="nav">
          <li><NavLink to="/">Início</NavLink></li>
          <li><NavLink to="/produtos">Produtos</NavLink></li>
        </ul>

        <div className="header-actions">
          <span className="icon-button"><FiSearch /></span>
          <Link to="/favoritos" className="icon-button" aria-label="Favoritos">
            <FiHeart />
            {favorites.length > 0 && <span className="badge">{favorites.length}</span>}
          </Link>
          <Link to="/login" className="icon-button" aria-label="Entrar"><FiUser /></Link>
          <span className="icon-button cart">
            <FiShoppingCart />
            {totalCount > 0 && <span className="badge">{totalCount}</span>}
          </span>
        </div>
    </header>
  );
};

export default Header;
