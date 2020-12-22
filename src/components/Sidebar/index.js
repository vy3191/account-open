

import { Link,  NavLink } from 'react-router-dom';
import { navBarItems } from './SidebarData';
import { AiOutlineClose } from 'react-icons/Ai';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

const Sidebar = () => {
  const [sideBar, setSideBar ] = React.useState(false)

  return (    
    <IconContext.Provider value={ { color: '#fff'}}>
    { sideBar &&  <nav className="components-sidebar">
        <ul className="component-sidebar-nav-items">
          <li className="navbar-close">
            <Link to="/" className="hamburger-menu-close">
              <AiOutlineClose />
            </Link>
          </li>
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
      </nav>}
      {
        !sideBar && (
          <div className="hamburger" onClick={() => setSideBar(!sideBar)}>
            <Link to="#" className="hamburger-menu">
              <FaBars />
            </Link>
          </div>
        )
      }
    </IconContext.Provider>
  )
};

export default Sidebar;
