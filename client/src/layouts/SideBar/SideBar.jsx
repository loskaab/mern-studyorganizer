import { useState } from 'react';

import Container from 'components/shared/Container/Container';
import Button from 'components/shared/Button/Button';
import reactLogo from 'assets/icons/react.svg';
import viteLogo from 'assets/icons/vite.svg';
import { themes } from 'styles/themes';

import { LinkReact, LinkVite } from './SideBar.styled';

const SideBar = () => {
  const [count, setCount] = useState(0);

  return (
    <Container
      $p={`${themes.indent.s} ${themes.indent.m}`}
      $d="flex"
      $fd="column"
      $jc="center"
      $ai="center"
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
      <Button onClick={() => setCount(count => count + 1)}>Count {count}</Button>
    </Container>
  );
};

export default SideBar;
