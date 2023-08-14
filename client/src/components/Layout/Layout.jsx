import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import NavBar from 'components/HeadBar/NavBar';
import AuthBar from 'components/HeadBar/AuthBar';
import SideBar from 'components/SideBar/SideBar';
import mernLogo from 'images/favicon.png';
import clN from 'services/classNames';
import css from 'components/Layout/Layout.module.scss';

const Layout = () => {
  return (
    <>
      <header className={clN(css.container, css.header)}>
        <a href="https://github.com/Belka-S/mern_starter" target="_blank" rel="noopener noreferrer">
          <img src={mernLogo} height="36" width="36" alt="MERN logo" />
        </a>

        <NavBar />
        <AuthBar />
      </header>

      <main className={clN(css.container, css.inline)}>
        <SideBar />

        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
