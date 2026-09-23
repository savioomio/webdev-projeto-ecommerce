import { useLoaderData } from 'react-router'
import hero from '../assets/hero.png'
import HeroSection from '../components/HeroSection'
import CategorySection from '../components/CategorySection'
import ProductSection from '../components/ProductSection'
import BenefitsSection from '../components/BenefitsSection'
import { buscarProdutos } from '../services/produtos'

// Destaques = os 4 produtos mais bem avaliados
export async function homeLoader() {
  const produtos = await buscarProdutos()
  produtos.sort((a, b) => b.rating.rate - a.rating.rate)

  return { produtos: produtos.slice(0, 4) }
}

const Home = () => {
  const { produtos } = useLoaderData()

  return (
    <>
      <HeroSection image={hero} />
      <CategorySection />
      <ProductSection produtos={produtos} />
      <BenefitsSection />
    </>
  )
}

export default Home
