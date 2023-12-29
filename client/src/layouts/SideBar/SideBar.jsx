import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import ScreenSaver from 'components/ScreenSaver/ScreenSaver';
import ElementFrame from 'components/ElementFrame/ElementFrame';

import { SideBarDiv } from './SideBar.styled';

const SideBar = ({ $side, $width, $height, $offY }) => {
  const { pathname } = useLocation();

  return (
    <SideBarDiv $side={$side} $width={$width} $height={$height} $offY={$offY}>
      {pathname.includes('element/') ? <ElementFrame /> : <ScreenSaver />}
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
