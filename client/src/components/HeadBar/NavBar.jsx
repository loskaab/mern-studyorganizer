import { NavLink } from 'react-router-dom';

import clN from 'services/classNames';
// eslint-disable-next-line import/order
import { btn_nav } from 'styles/common/Buttons.module.scss';
import { navlink } from './HeadBar.module.scss';

const NavBar = () => {
  return (
    <nav>
      <NavLink className={clN(navlink, btn_nav)} to="/">
        Home
      </NavLink>
      <NavLink className={clN(navlink, btn_nav)} to="/items">
        Items
      </NavLink>
    </nav>
  );
};

export default NavBar;
