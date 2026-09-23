import { useLoaderData } from 'react-router'
import ProductList from '../components/product/ProductList'
import CategoryTabs from '../components/category/CategoryTabs'
import { categorias, buscarCategoria } from '../data/categorias'
import { buscarProdutos } from '../services/produtos'

// loader: roda ANTES da tela renderizar. O que retornar aqui
// fica disponível via useLoaderData(). Em erro, dê throw numa Response.
// Ele roda de novo sempre que o ?categoria= da URL muda (troca de aba).
export async function produtosLoader({ request }) {
  const url = new URL(request.url)
  const slug = url.searchParams.get('categoria')
  const categoria = slug ? buscarCategoria(slug) : null

  if (slug && !categoria) {
    throw new Response('Categoria não encontrada', { status: 404 })
  }

  return { produtos: await buscarProdutos(slug), categoria }
}

const Produtos = () => {
  const { produtos, categoria } = useLoaderData()

  return (
    <section id="produtos" className="products">
      <h2>{categoria ? categoria.nome : 'Todos os produtos'}</h2>

      <CategoryTabs categorias={categorias} ativa={categoria?.slug ?? null} />
      <ProductList produtos={produtos} />
    </section>
  )
}

export default Produtos
