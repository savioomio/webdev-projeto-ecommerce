import './App.css'
import hero from './assets/hero.png'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import CategorySection from './components/CategorySection'
import ProductSection from './components/ProductSection'
import BenefitsSection from './components/BenefitsSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="app">
      <Header />
      
      <HeroSection image={hero} />

      <CategorySection />

      <ProductSection />

      <BenefitsSection />

      <Footer />

    </div>
  )
}

export default App
