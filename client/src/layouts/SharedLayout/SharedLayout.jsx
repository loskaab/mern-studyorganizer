// import classNames from 'classnames/bind';
import { Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import FlexWrap from 'components/shared/FlexWrap/FlexWrap';
import GridWrap from 'components/shared/GridWrap/GridWrap';
import OvalLoader from 'components/shared/Loader/OvalLoader';
import Header from 'layouts/Header/Header';
import SideBar from 'layouts/SideBar/SideBar';

const SharedLayout = () => {
  const [gridHeight, setGridHeight] = useState('');

  const windowHeight = window.innerHeight;
  const headerHeight = document.querySelector('header')?.offsetHeight;

  useEffect(() => {
    setGridHeight(`calc(${windowHeight}px - ${headerHeight}px - 19px)`);
  }, [headerHeight, windowHeight]);

  return (
    <FlexWrap $p="0">
      <Header />

      <GridWrap $h={gridHeight} $cg="0" $gtc="40% 60%">
        <SideBar />

        <Suspense fallback={<OvalLoader />}>
          <Outlet />
        </Suspense>
      </GridWrap>
    </FlexWrap>
  );
};

export default SharedLayout;
