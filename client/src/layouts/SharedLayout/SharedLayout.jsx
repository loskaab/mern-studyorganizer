import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import classNames from 'classnames/bind';

import NavBar from 'layouts/HeadBar/NavBar';
import AuthBar from 'layouts/HeadBar/AuthBar';
import SideBar from 'layouts/SideBar/SideBar';
import mernLogo from 'assets/icons/favicon.png';
import css from 'layouts/SharedLayout/SharedLayout.module.scss';

const Layout = () => {
  return (
    <>
      <header className={classNames(css.container, css.header)}>
        {/* винести в компонент Лого */}
        <a href="https://github.com/Belka-S/mern_starter" target="_blank" rel="noopener noreferrer">
          <img src={mernLogo} height="36" width="36" alt="MERN logo" />
        </a>

        <NavBar />
        <AuthBar />
      </header>

      <main className={classNames(css.container, css.inline)}>
        <SideBar />

        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
