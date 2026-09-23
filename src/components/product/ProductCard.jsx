import { FiHeart } from "react-icons/fi"
import AddToCartButton from "../AddToCartButton"
import { useFavorites } from "../../context/FavoritesContext"

const ProductCard = ({ product }) => {
    const { isFavorite, toggleFavorite } = useFavorites()
    const favorito = isFavorite(product.id)

    return (
        <div className="product-card">
            <button
                className={favorito ? "favorite-button active" : "favorite-button"}
                onClick={() => toggleFavorite(product)}
                aria-label={favorito ? "Remover dos favoritos" : "Adicionar aos favoritos"}
            >
                <FiHeart />
            </button>
            <img src={product.image} alt={product.title} />
            <p className="product-category">{product.category}</p>
            <h3>{product.title}</h3>
            <p className="product-rating">
                <span className="stars">
                    { '★'.repeat(Math.floor(product.rating?.rate ?? 0)) + '☆'.repeat(5 - Math.floor(product.rating?.rate ?? 0))}
                </span>
                ({product.rating?.rate ?? '-'})
            </p>
            <p className="product-price">R$ {product.price.toFixed(2).replace('.', ',')}</p>
            <AddToCartButton product={product} />
        </div>
    )
}

export default ProductCard
