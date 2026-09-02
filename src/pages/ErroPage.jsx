import { useRouteError, isRouteErrorResponse, Link } from 'react-router'

const ErroPage = () => {
  const error = useRouteError()

  let titulo = 'Algo deu errado'
  let mensagem = 'Erro inesperado.'

  if (isRouteErrorResponse(error)) {
    titulo = `${error.status} ${error.statusText}`
    mensagem = error.data || mensagem
  } else if (error instanceof Error) {
    mensagem = error.message
  }

  return (
    <section className="products" style={{ textAlign: 'center' }}>
      <h2>{titulo}</h2>
      <p>{mensagem}</p>
      <Link className="btn-primary" to="/">Voltar para a home</Link>
    </section>
  )
}

export default ErroPage
