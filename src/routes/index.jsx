import { Routes, Route } from 'react-router-dom'
import { Home, Login, Pasteleria, Promociones, Lomasvendido, Destacado, Secret, Singup } from '@/pages'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} /> {// Direccion de la ruta que queremos que tome
}
      <Route path='/Login' element={<Login />} />,
      <Route path='/Pasteleria' element={<Pasteleria />} />
      <Route path='/Promociones' element={<Promociones />} />
      <Route path='/Lomasvendido' element={<Lomasvendido />} />
      <Route path='/Destacado' element={<Destacado />} />
      <Route path='/Secret' element={<Secret />} />
      <Route path='/Singup' element={<Singup />} />

    </Routes>
  )
}

export default RoutesIndex
