import { useLoaderData } from 'react-router'
import ProductCard from '../components/product/ProductCard'

// loader: roda ANTES da tela renderizar. O que retornar aqui
// fica disponível via useLoaderData(). Em erro, dê throw numa Response.
export async function produtosLoader({ request }) {
  const url = new URL(request.url)
  const limit = url.searchParams.get('limit') ?? '8'

  const res = await fetch(`https://fakestoreapi.com/products?limit=${limit}`)
  if (!res.ok) {
    throw new Response('Não foi possível carregar os produtos', { status: res.status })
  }

  return { produtos: await res.json() }
}

const Produtos = () => {
  const { produtos } = useLoaderData()

  return (
    <section id="produtos" className="products">
      <h2>Todos os produtos</h2>

      <div className="product-list">
        {produtos.map((p) => (
          <ProductCard product={p} />
        ))}
      </div>
    </section>
  )
}

export default Produtos
