import './App.css'
// import { Home, Dashboard, Login, Singup, Secret } from '@/pages' // este import lo esta mandando llamar de mi documento index.js
import Header from '@/components/Header/Header'
import { BrowserRouter } from 'react-router-dom' // componente de react router dom para envolver todo lo que hay dentro de mi app
import RoutesIndex from './routes'

function App () {
  return (
    <>
      <BrowserRouter>
        <Header />
        <RoutesIndex />
      </BrowserRouter>
    </>
  )
}

export default App
