import { Link, NavLink } from "react-router";
import { FiSearch, FiHeart, FiShoppingCart, FiShoppingBag } from "react-icons/fi";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { totalCount } = useCart();

  return (
    <header className="header">
        <Link to="/" className="logo"><FiShoppingBag /> ReactShop</Link>

        <ul className="nav">
          <li><NavLink to="/">Início</NavLink></li>
          <li><NavLink to="/produtos">Produtos</NavLink></li>
        </ul>

        <div className="header-actions">
          <span className="icon-button"><FiSearch /></span>
          <span className="icon-button"><FiHeart /></span>
          <span className="icon-button cart">
            <FiShoppingCart />
            {totalCount > 0 && <span className="badge">{totalCount}</span>}
          </span>
        </div>
    </header>
  );
};

export default Header;
