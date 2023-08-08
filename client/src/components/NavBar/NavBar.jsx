import { NavLink } from 'react-router-dom';

import clN from 'services/classNames';
// eslint-disable-next-line import/order
import { btn } from 'styles/common/Buttons.module.scss';
import { nav_link } from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav>
      <NavLink className={clN(nav_link, btn)} to="/">
        Home
      </NavLink>
      <NavLink className={clN(nav_link, btn)} to="/items">
        Items
      </NavLink>
    </nav>
  );
};

export default NavBar;
