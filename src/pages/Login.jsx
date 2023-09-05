import logo from '@/assets/login.jpg'
import '@/styles/form.css' // importamos el estilo para este formulario el cual se encuentra en la carpeta styles y el archivo se llama form.css
import { useState } from 'react'
import { loginUserService } from '@/services/userService'

const Login = () => {
  const [email, setEmail] = useState('') // hook de useState
  const [password, setPassword] = useState('')

  const sendData = async (data) => {
    try { // como manejamos una promesa con aweit es necesario usar un try catch para el manejo de errores.
      const response = await loginUserService(data) // es una promesa.
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault() // evita que se vuelva a cargar la pag
    sendData({ email, password })
  }
  return (
    <main className='form-signin w-100 m-auto'>
      <form onSubmit={handleSubmit}> {// accion que queremos que haga del formulario
      }
        <img className='mb-4' src={logo} alt='React' width='150' height='150' />
        <h1 className='h3 mb-3 fw-normal'>Please sign in</h1>

        <div className='form-floating'>
          <input type='email' className='form-control' id='floatingInput' placeholder='name@example.com' onChange={(event) => setEmail(event.target.value)} />
          <label htmlFor='floatingInput'>Email address</label>
        </div>
        <div className='form-floating'>
          <input type='password' className='form-control' id='floatingPassword' placeholder='Password' onChange={(event) => setPassword(event.target.value)} />
          <label htmlFor='floatingPassword'>Password</label>
        </div>

        <button className='btn btn-primary w-100 py-2' type='submit'>Sign in</button>
        <p className='mt-5 mb-3 text-body-secondary'>© 2017–2023</p>
      </form>
    </main>
  )
}
export default Login
