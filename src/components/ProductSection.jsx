import ProductCard from "./product/ProductCard";

const ProductSection = ({ produtos }) => {
    return (
        <section id="produtos" className="products">
            <h2>Produtos em destaque</h2>

            <div className="product-list">
                {produtos.map((p) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </section>
    )
}

export default ProductSection;
