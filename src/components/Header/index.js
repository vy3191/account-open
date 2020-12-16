import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Logo</h1>
      <nav>
         <NavLink to="/home">Home</NavLink>
         <NavLink to="/about">About</NavLink>
         <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  )
}

export default Header;
