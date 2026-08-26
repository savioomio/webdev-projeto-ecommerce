const Header = () => {
  return (
    <header className="header">
        <div className="logo">🛍️ ReactShop</div>

        <ul className="nav">
          <li><a href="#produtos">Início</a></li>
          <li><a href="#produtos">Produtos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>

        <div className="header-actions">
          <span className="icon-button">🔍</span>
          <span className="icon-button">❤️</span>
          <span className="icon-button cart">
            🛒
            <span className="badge">3</span>
          </span>
        </div>
    </header>
  );
};

export default Header;