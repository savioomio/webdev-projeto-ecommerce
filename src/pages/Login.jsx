import { Form, redirect, useActionData, useNavigation } from 'react-router'

// action: roda quando o <Form method="post"> é enviado.
// Retornar um objeto -> vira useActionData(). Retornar redirect() -> navega.
export async function loginAction({ request }) {
  const formData = await request.formData()
  const email = formData.get('email')?.trim()
  const senha = formData.get('senha')

  if (!email || !email.includes('@')) {
    return { erro: 'Informe um e-mail válido.' }
  }
  if (!senha || senha.length < 6) {
    return { erro: 'A senha precisa ter pelo menos 6 caracteres.' }
  }

  return redirect('/')
}

const Login = () => {
  const dados = useActionData()
  const navigation = useNavigation()
  const enviando = navigation.state === 'submitting'

  return (
    <section className="products">
      <Form method="post" className="login-form">
        <h2>Entrar</h2>

        <label>
          E-mail
          <input type="email" name="email" placeholder="voce@email.com" />
        </label>

        <label>
          Senha
          <input type="password" name="senha" placeholder="••••••" />
        </label>

        {dados?.erro && <p className="form-error">{dados.erro}</p>}

        <button type="submit" className="btn-primary" disabled={enviando}>
          {enviando ? 'Entrando...' : 'Entrar'}
        </button>
      </Form>
    </section>
  )
}

export default Login
