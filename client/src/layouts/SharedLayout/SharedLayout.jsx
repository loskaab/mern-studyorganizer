// import classNames from 'classnames/bind';
import { Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import GridWrap from 'components/shared/GridWrap/GridWrap';
import OvalLoader from 'components/shared/Loader/OvalLoader';
import Header from 'layouts/Header/Header';
import SideBar from 'layouts/SideBar/SideBar';

const SharedLayout = () => {
  const [offsetY, setOffsetY] = useState('45px');
  const [barHeight, setBarHeight] = useState(`calc(100vh - ${offsetY})`);

  const headerEl = document.querySelector('header');
  const headerHeight = headerEl?.offsetHeight;
  const barWidth = '40%';

  useEffect(() => {
    setOffsetY(`${headerHeight}px`);
    setBarHeight(`calc(100vh - ${headerHeight}px)`);
  }, [headerHeight]);

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
