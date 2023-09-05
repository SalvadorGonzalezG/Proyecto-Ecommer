import { NavLink } from 'react-router-dom'
import './header.scss' // importamos nuestra hoja de estilos ya qeu usaremos sass.
// Header HTML con BEM (Block, Element, Modific)
const Header = () => {
  const linkIsActive = (isActive) => {
    return isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link' // si isActive coloca ambas clases si de lo contrario unicamente 'header__item-link'
  }
  return (
    <nav className='header'>
      <NavLink href='/' className='header__logo'>ECOMERCE.</NavLink>
      <ul className='header__nav-list'>
        <li className='header__list-item'> {// li es un item dentro de mi lista*/
        }
          <NavLink to='/' className={({ isActive }) => linkIsActive(isActive)}>Home</NavLink>
        </li>
        <li className='header__list-item'>
          <NavLink to='/Destacado' className={({ isActive }) => linkIsActive(isActive)}>Destacado</NavLink>
        </li>
        <li className='header__list-item'>
          <NavLink to='/Promociones' className={({ isActive }) => linkIsActive(isActive)}>Promociones</NavLink>
        </li>
        <li className='header__list-item'>
          <NavLink to='/Lomasvendido' className={({ isActive }) => linkIsActive(isActive)}>L.M. Vendido.</NavLink>
        </li>
        <li className='header__list-item'>
          <NavLink to='/Pasteleria' className={({ isActive }) => linkIsActive(isActive)}>Pasteleria</NavLink>
        </li>
        <li className='header__list-item'>
          <NavLink to='/Secret' className={({ isActive }) => linkIsActive(isActive)}>Secret</NavLink>
        </li>
        <li className='header__list-item'>
          <NavLink to='/Login' className={({ isActive }) => linkIsActive(isActive)}>Login</NavLink>
        </li>
        <li className='header__list-item'>
          <NavLink to='/Singup' className={({ isActive }) => linkIsActive(isActive)}>Singup</NavLink>
        </li>

      </ul>
    </nav>
  )
}

export default Header
