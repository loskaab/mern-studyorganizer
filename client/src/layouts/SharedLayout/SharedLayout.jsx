import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import GridWrap from 'components/shared/GridWrap/GridWrap';
import OvalLoader from 'components/shared/Loader/OvalLoader';
import Header from 'layouts/Header/Header';
import SideBar from 'layouts/SideBar/SideBar';

import { themes } from 'styles/themes';

const SharedLayout = () => {
  const { xl } = themes.indents;
  const barH = `calc(100vh - ${xl})`;
  const barW = '40%';
  const outletW = `calc(100% - ${barW})`;

  return (
    <>
      <Header $height={xl} />

      <SideBar $side="left" $width={barW} $height={barH} $offY={xl} />

      <GridWrap $gtc={`${barW}  ${outletW}`} $cg="0">
        <div style={{ height: barH }}></div>
        <Suspense fallback={<OvalLoader />}>
          <Outlet />
        </Suspense>
      </GridWrap>
    </>
  );
};

export default SharedLayout;
