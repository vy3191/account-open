

import { NavLink } from 'react-router-dom';

const Sidebar = () => (
    <nav className="components-sidebar">
      <ul>
        <li><NavLink activeClassName="active" exact replace to="/home">Home</NavLink></li>
        <li><NavLink activeClassName="active" exact replace to="/about">About</NavLink></li>
        <li><NavLink activeClassName="active" exact replace to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
);

export default Sidebar;
