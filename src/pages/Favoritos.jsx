import { Link } from 'react-router'
import ProductList from '../components/product/ProductList'
import { useFavorites } from '../context/FavoritesContext'

const Favoritos = () => {
  const { favorites } = useFavorites()

  return (
    <section className="products">
      <h2>Meus favoritos</h2>

      {favorites.length === 0 ? (
        <div className="empty-state">
          <p>Você ainda não favoritou nenhum produto.</p>
          <Link className="btn-primary" to="/produtos">Ver produtos</Link>
        </div>
      ) : (
        <ProductList produtos={favorites} />
      )}
    </section>
  )
}

export default Favoritos
