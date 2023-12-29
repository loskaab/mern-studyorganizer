import { useState } from 'react';

import Button from 'components/shared/Button/Button';
import reactLogo from 'assets/icons/react.svg';
import viteLogo from 'assets/icons/vite.svg';

import { Wrap, LinkReact, LinkVite } from './ScreenSaver.styled';

const ScreenSaver = () => {
  const [count, setCount] = useState(0);

  return (
    <Wrap>
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
    </Wrap>
  );
};

export default ScreenSaver;
