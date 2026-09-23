import ProductList from "./product/ProductList";

const ProductSection = ({ produtos }) => {
    return (
        <section id="produtos" className="products">
            <h2>Produtos em destaque</h2>
            <ProductList produtos={produtos} />
        </section>
    )
}

export default ProductSection;
