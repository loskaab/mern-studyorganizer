import PropTypes from 'prop-types';
import { useState } from 'react';

import Button from 'components/shared/Button/Button';
import reactLogo from 'assets/icons/react.svg';
import viteLogo from 'assets/icons/vite.svg';

import { SideBarDiv, LinkReact, LinkVite } from './SideBar.styled';

const SideBar = ({ $side, $barWidth, $barHeight, $offsetY }) => {
  const [count, setCount] = useState(0);

  return (
    <SideBarDiv
      $side={$side}
      $barWidth={$barWidth}
      $barHeight={$barHeight}
      $offsetY={$offsetY}
    >
      <h2 style={{ fontFamily: '"Montserrat", sans-serif' }}>React + Vite</h2>
      <div>
        <LinkReact href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} alt="React logo" />
        </LinkReact>
        <LinkVite href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} alt="Vite logo" />
        </LinkVite>
      </div>
      <Button onClick={() => setCount(count => count + 1)}>
        Count {count}
      </Button>
    </SideBarDiv>
  );
};

export default SideBar;

SideBar.propTypes = {
  $side: PropTypes.string,
  $barWidth: PropTypes.string,
  $barHeight: PropTypes.string,
  $offsetY: PropTypes.string,
};
