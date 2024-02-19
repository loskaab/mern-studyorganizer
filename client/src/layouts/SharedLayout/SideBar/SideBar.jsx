import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import ScreenSaver from 'components/ScreenSaver/ScreenSaver';
import ElementFrame from 'components/ElementFrame/ElementFrame';
import ElementEditBar from 'components/ElementBars/ElementEditBar';

import { SideBarDiv } from './SideBar.styled';

const SideBar = ({ $side, $width, $height, $offY }) => {
  const { pathname } = useLocation();

  const isFrame = () => {
    const paths = ['cluster', 'element', 'gdrive'];
    return paths.some(el => pathname.includes(el)); // && user?._id === activeCluster?.owner
  };

  return (
    <SideBarDiv $side={$side} $width={$width} $height={$height} $offY={$offY}>
      {isFrame() ? <ElementFrame /> : <ScreenSaver />}
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
