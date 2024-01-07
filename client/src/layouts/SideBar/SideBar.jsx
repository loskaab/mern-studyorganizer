import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { useAuth, useClusters } from 'utils/hooks';

import ScreenSaver from 'components/ScreenSaver/ScreenSaver';
import ElementFrame from 'components/ElementFrame/ElementFrame';
import ElementEditBar from 'components/ElemetnBars/ElementEditBar';

import { SideBarDiv } from './SideBar.styled';

const SideBar = ({ $side, $width, $height, $offY }) => {
  const { pathname } = useLocation();
  const { user } = useAuth();
  const { activeCluster } = useClusters();

  const isFrame = user?._id === activeCluster?.owner && pathname.length !== 1;

  return (
    <SideBarDiv $side={$side} $width={$width} $height={$height} $offY={$offY}>
      {isFrame ? <ElementFrame /> : <ScreenSaver />}
      {pathname.includes('/element') && <ElementEditBar />}
    </SideBarDiv>
  );
};

export default SideBar;

SideBar.propTypes = {
  $side: PropTypes.string,
  $width: PropTypes.string,
  $height: PropTypes.string,
  $offY: PropTypes.string,
};
