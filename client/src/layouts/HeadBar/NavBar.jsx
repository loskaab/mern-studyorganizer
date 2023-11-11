import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import { btn_nav } from 'styles/common/Buttons.module.scss';

import { navlink } from './HeadBar.module.scss';

const NavBar = () => {
  return (
    <nav>
      <NavLink className={classNames(navlink, btn_nav)} to="/">
        Home
      </NavLink>
      <NavLink className={classNames(navlink, btn_nav)} to="/items">
        Items
      </NavLink>
    </nav>
  );
};

export default NavBar;
