

import { NavLink } from 'react-router-dom';

const Sidebar = () => (
    <nav className="components-sidebar">
      <NavLink activeClassName="active" exact replace to="/home">Home</NavLink>
      <NavLink activeClassName="active" exact replace to="/about">About</NavLink>
      <NavLink activeClassName="active" exact replace to="/contact">Contact</NavLink>
    </nav>
);

export default Sidebar;
