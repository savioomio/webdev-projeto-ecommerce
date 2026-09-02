import hero from '../assets/hero.png'
import HeroSection from '../components/HeroSection'
import CategorySection from '../components/CategorySection'
import ProductSection from '../components/ProductSection'
import BenefitsSection from '../components/BenefitsSection'

const Home = () => {
  return (
    <>
      <HeroSection image={hero} />
      <CategorySection />
      <ProductSection />
      <BenefitsSection />
    </>
  )
}

export default Home
