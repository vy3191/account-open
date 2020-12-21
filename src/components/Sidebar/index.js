

import { NavLink } from 'react-router-dom';
import { navBarItems } from './SidebarData';

const Sidebar = () => (
    <nav className="components-sidebar">
      <input type="checkbox" />
      <span />
      <span />
      <span />
      <ul>
        {/* <li><NavLink activeClassName="active" exact replace to="/home">Home</NavLink></li>
        <li><NavLink activeClassName="active" exact replace to="/about">About</NavLink></li>
        <li><NavLink activeClassName="active" exact replace to="/contact">Contact</NavLink></li> */}
        {
          navBarItems.map( (link, index) => (
            <li key={index} className={link.className}>
              <NavLink activeClassName='active'  exact replace to={link.path}>
                 {link.icon}<span>{link.title}</span>
              </NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
);

export default Sidebar;
