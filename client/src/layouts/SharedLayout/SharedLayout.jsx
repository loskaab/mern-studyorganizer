// import classNames from 'classnames/bind';
import { Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import GridWrap from 'components/shared/GridWrap/GridWrap';
import OvalLoader from 'components/shared/Loader/OvalLoader';
import Header from 'layouts/Header/Header';
import SideBar from 'layouts/SideBar/SideBar';

const SharedLayout = () => {
  const [offsetY, setOffsetY] = useState('');
  const [barHeight, setBarHeight] = useState('');

  const barWidth = '40%';

  const headerEl = document.querySelector('header');
  const headerHeight = headerEl?.offsetHeight;
  const windowHeight = window.innerHeight;

  useEffect(() => {
    setOffsetY(`${headerHeight}px`);
    setBarHeight(`calc(${windowHeight}px - ${headerHeight}px)`);
  }, [headerHeight, windowHeight]);

  return (
    <>
      <Header />
      <SideBar
        $side="left"
        $barWidth={barWidth}
        $barHeight={barHeight}
        $offsetY={offsetY}
      />

      <GridWrap $gtc={`${barWidth} calc(100% - ${barWidth})`} $cg="0">
        <div style={{ height: barHeight }}></div>
        <Suspense fallback={<OvalLoader />}>
          <Outlet />
        </Suspense>
      </GridWrap>
    </>
  );
};

export default SharedLayout;
