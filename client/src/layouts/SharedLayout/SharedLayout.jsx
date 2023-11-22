import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import GridWrap from 'components/shared/GridWrap/GridWrap';
import OvalLoader from 'components/shared/Loader/OvalLoader';
import Header from 'layouts/Header/Header';
import SideBar from 'layouts/SideBar/SideBar';

import ClustersFilter from 'components/Filters/ClustersFilter';
import ClustersSelect from 'components/Filters/ClustersSelect';

import { themes } from 'styles/themes';

const SharedLayout = () => {
  const { pathname } = useLocation();

  const { xl } = themes.indents;
  const barH = `calc(100vh - ${xl})`;
  const barW = '40%';

  return (
    <>
      <Header>
        <GridWrap $ai="center" $gtc="2fr 1fr">
          {pathname === '/cluster' && <ClustersFilter />}
          {pathname === '/cluster' && <ClustersSelect />}
        </GridWrap>
      </Header>

      <SideBar $side="left" $width={barW} $height={barH} $offY={xl} />

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
