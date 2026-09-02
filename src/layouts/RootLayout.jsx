import { Outlet, useNavigation } from 'react-router'
import '../App.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const RootLayout = () => {
  const navigation = useNavigation()
  const carregando = navigation.state === 'loading'

  return (
    <div className="app">
      <Header />

      <main className={carregando ? 'route-loading' : undefined}>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default RootLayout
