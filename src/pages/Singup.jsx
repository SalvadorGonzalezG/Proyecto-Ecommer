import { useForm } from 'react-hook-form'
import logo from '@/assets/sing.jpg'
import '@/styles/form.css'
import { registerUserService } from '@/services/userService'
// import axios from 'axios'

const Singup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const sendData = async (data) => {
    try { // como manejamos una promesa con aweit es necesario usar un try catch para el manejo de errores.
      const response = await registerUserService(data) // es una promesa.
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  // const handleSubmit = (e) => {
  // e.preventDefault() // evita que se vuelva a cargar la pag
  // sendData({ })}
  return (
    <main className='form-signin w-100 m-auto'>
      <form onSubmit={handleSubmit(sendData)}>
        <img className='mb-4' src={logo} alt='' width='150' height='150' />
        <h1 className='h3 mb-3 fw-normal'>Please sign up</h1>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='first_name'
            name='first_name'
            placeholder='John'
            {...register('first_name')}

          />
          <label htmlFor='first_name'>First Name</label>
        </div>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='last_name'
            name='last_name'
            placeholder='Doe'
            {...register('last_name')}
          />
          <label htmlFor='last_name'>Last Name</label>
        </div>

        <div className='form-floating'>
          <select
            className='form-select'
            id='gender'
            name='gender'
            {...register('gender')}
          >
            <option value=''>Choose...</option>
            <option value='M'>Male</option>
            <option value='F'>Female</option>
          </select>
          <label htmlFor='gender'>Gender</label>

        </div>

        <div className='form-floating'>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            placeholder='name@example.com'
            {...register('email')}
          />
          <label htmlFor='email'>Email address</label>
        </div>

        <div className='form-floating'>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            placeholder='Password'
            {...register('password')}
          />
          <label htmlFor='password'>Password</label>
        </div>

        <button className='w-100 btn btn-lg btn-primary' type='submit'>Sign in</button>
        <p className='mt-5 mb-3 text-muted'>© 2017–2022</p>
      </form>
    </main>
  )
}

export default Singup
