import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import './index.css'
import RootLayout from './layouts/RootLayout'
import ErroPage from './pages/ErroPage'
import Home, { homeLoader } from './pages/Home'
import Produtos, { produtosLoader } from './pages/Produtos'

// O router é criado UMA vez, fora da árvore React.
const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    errorElement: <ErroPage />,
    children: [
      {
        index: true,
        Component: Home,
        loader: homeLoader,
      },
      {
        path: 'produtos',
        Component: Produtos,
        loader: produtosLoader,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
