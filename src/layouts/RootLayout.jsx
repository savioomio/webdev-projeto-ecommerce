import { Outlet, useNavigation } from 'react-router'
import '../App.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { CartProvider } from '../context/CartContext'

const RootLayout = () => {
  const navigation = useNavigation()
  const carregando = navigation.state === 'loading'

  return (
    <CartProvider>
      <div className="app">
        <Header />

        <main className={carregando ? 'route-loading' : undefined}>
          <Outlet />
        </main>

        <Footer />
      </div>
    </CartProvider>
  )
}

export default RootLayout
