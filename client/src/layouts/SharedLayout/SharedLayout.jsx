import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';

import GridWrap from 'components/shared/GridWrap/GridWrap';
import OvalLoader from 'components/shared/Loader/OvalLoader';
import Header from 'layouts/SharedLayout/Header/Header';
import SideBar from 'layouts/SharedLayout/SideBar/SideBar';

import { themes } from 'styles/themes';

const { xl } = themes.indents;
const barH = `calc(100vh - ${xl})`;

const SharedLayout = () => {
  const [barW, setBarW] = useState('50%');

  return (
    <>
      <Header $height={xl} barW={barW} setBarW={setBarW} />

      <SideBar $side="left" $width={barW} $height={barH} $offY={xl} />

      <GridWrap $gtc={`${barW}  calc(100% - ${barW})`} $cg="0">
        <div style={{ height: barH }}></div>
        <Suspense fallback={<OvalLoader />}>
          <Outlet />
        </Suspense>
      </GridWrap>
    </>
  );
};

export default SharedLayout;
