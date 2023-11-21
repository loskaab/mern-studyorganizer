// import classNames from 'classnames/bind';
import { Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import GridWrap from 'components/shared/GridWrap/GridWrap';
import OvalLoader from 'components/shared/Loader/OvalLoader';
import Header from 'layouts/Header/Header';
import SideBar from 'layouts/SideBar/SideBar';

import ClustersFilter from 'components/Filters/ClustersFilter';
import ClustersSelect from 'components/Filters/ClustersSelect';

const SharedLayout = () => {
  const [offY, setOffY] = useState('45px');
  const [barH, setBarH] = useState(`calc(100vh - ${offY})`);

  const headerEl = document.querySelector('header');
  const headerHeight = headerEl?.offsetHeight;
  const barW = '40%';

  useEffect(() => {
    setOffY(`${headerHeight}px`);
    setBarH(`calc(100vh - ${headerHeight}px)`);
  }, [headerHeight]);

  return (
    <>
      <Header>
        <GridWrap $ai="center" $gtc="2fr 1fr">
          <ClustersFilter />
          <ClustersSelect />
        </GridWrap>
      </Header>

      <SideBar $side="left" $width={barW} $height={barH} $offY={offY} />

      <GridWrap $gtc={`${barW} calc(100% - ${barW})`} $cg="0">
        <div style={{ height: barH }}></div>
        <Suspense fallback={<OvalLoader />}>
          <Outlet />
        </Suspense>
      </GridWrap>
    </>
  );
};

export default SharedLayout;
