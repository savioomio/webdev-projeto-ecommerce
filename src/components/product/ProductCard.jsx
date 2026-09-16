import AddToCartButton from "../AddToCartButton"

const ProductCard = (product) => {
    product = product.product

    return (
        <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <p className="product-category">{product.category}</p>
            <h3>{product.title}</h3>
            <p className="product-rating">
                <span className="stars">★</span> ({product.rating?.rate ?? '-'})
            </p>
            <p className="product-price">R$ {product.price.toFixed(2).replace('.', ',')}</p>
            <AddToCartButton product={product} />
        </div>
    )
}

export default ProductCard