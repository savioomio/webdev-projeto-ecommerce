import { useLoaderData } from 'react-router'
import hero from '../assets/hero.png'
import HeroSection from '../components/HeroSection'
import CategorySection from '../components/CategorySection'
import ProductSection from '../components/ProductSection'
import BenefitsSection from '../components/BenefitsSection'

export async function homeLoader() {
  const res = await fetch('https://fakestoreapi.com/products?limit=4')
  if (!res.ok) {
    throw new Response('Não foi possível carregar os produtos', { status: res.status })
  }

  return { produtos: await res.json() }
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
