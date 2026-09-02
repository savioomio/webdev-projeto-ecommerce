import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({ value }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (value >= i) {
            stars.push(<FaStar key={i} />);
        } else if (value >= i - 0.5) {
            stars.push(<FaStarHalfAlt key={i} />);
        } else {
            stars.push(<FaRegStar key={i} />);
        }
    }

    return (
        <p className="product-rating">
            <span className="stars">{stars}</span> ({value.toFixed(1)})
        </p>
    );
};

const ProductSection = () => {
    return (
        <section id="produtos" className="products">
            <h2>Produtos em destaque</h2>

            <div className="product-list">
                <div className="product-card">
                    <img src="https://placehold.co/240x240/aa3bff/ffffff?text=Tenis" alt="Tênis esportivo" />
                    <p className="product-category">Calçados</p>
                    <h3>Tênis Esportivo</h3>
                    <Rating value={4.5} />
                    <p className="product-price">R$ 299,90</p>
                    <button className="btn-secondary">Adicionar ao carrinho</button>
                </div>

                <div className="product-card">
                    <img src="https://placehold.co/240x240/3b82f6/ffffff?text=Fone" alt="Fone de ouvido bluetooth" />
                    <p className="product-category">Eletrônicos</p>
                    <h3>Fone de Ouvido Bluetooth</h3>
                    <Rating value={4.8} />
                    <p className="product-price">R$ 149,90</p>
                    <button className="btn-secondary">Adicionar ao carrinho</button>
                </div>

                <div className="product-card">
                    <img src="https://placehold.co/240x240/22c55e/ffffff?text=Mochila" alt="Mochila para notebook" />
                    <p className="product-category">Acessórios</p>
                    <h3>Mochila para Notebook</h3>
                    <Rating value={4.2} />
                    <p className="product-price">R$ 189,90</p>
                    <button className="btn-secondary">Adicionar ao carrinho</button>
                </div>

                <div className="product-card">
                    <img src="https://placehold.co/240x240/f97316/ffffff?text=Relogio" alt="Relógio smartwatch" />
                    <p className="product-category">Eletrônicos</p>
                    <h3>Relógio Smartwatch</h3>
                    <Rating value={4.7} />
                    <p className="product-price">R$ 349,90</p>
                    <button className="btn-secondary">Adicionar ao carrinho</button>
                </div>
            </div>
        </section>
    )
}

export default ProductSection;