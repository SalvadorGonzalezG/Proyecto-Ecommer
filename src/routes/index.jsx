import { Routes, Route } from 'react-router-dom'
import { Home, Login, Dashboard, Secret, Singup } from '@/pages'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} /> {// Direccion de la ruta que queremos que tome
}
      <Route path='/Login' element={<Login />} />,
      <Route path='/Dashboard' element={<Dashboard />} />,
      <Route path='/Secret' element={<Secret />} />,
      <Route path='/Singup' element={<Singup />} />

    </Routes>
  )
}

export default RoutesIndex
