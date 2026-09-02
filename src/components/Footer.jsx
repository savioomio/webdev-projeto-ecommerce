import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer id="contato" className="footer">
      <div className="footer-column">
        <h3>ReactShop</h3>
        <p>A melhor loja virtual para você encontrar tudo o que precisa.</p>
      </div>

      <div className="footer-column">
        <h3>Links úteis</h3>
        <ul>
          <li><a href="#produtos">Produtos</a></li>
          <li><a href="#contato">Contato</a></li>
          <li><a href="#produtos">Sobre nós</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h3>Redes sociais</h3>
        <div className="social-icons">
          <span className="icon-button"><FaFacebookF /></span>
          <span className="icon-button"><FaInstagram /></span>
          <span className="icon-button"><FaXTwitter /></span>
        </div>
      </div>

      <p className="copyright">© 2026 ReactShop. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
