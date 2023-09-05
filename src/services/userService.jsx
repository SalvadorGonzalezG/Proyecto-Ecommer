import axios from 'axios'

// const BASE_URL = 'http://localhost:3000'
const BASE_URL = 'https://reactavanzadom6.onrender.com' // LINK PROPORCIONADO POR RENDER

const loginUserService = (data) => axios.post(`${BASE_URL}/login`, data) // el primer parametro marca a que parte de la ruta va a ser dirigido, y el data va a ser el usuario que se esta mandando, la información.
const registerUserService = (data) => axios.post(`${BASE_URL}/register`, data)
export {
  loginUserService,
  registerUserService
}
