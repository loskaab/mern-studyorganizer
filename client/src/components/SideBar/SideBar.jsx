import { useState } from 'react';

import reactLogo from 'images/react.svg';
import viteLogo from 'images/vite.svg';

import css from './SideBar.module.scss';

const SideBar = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={css.sidebar}>
      <h2>React + Vite</h2>
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className={css.react} alt="React logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className={css.vite} alt="Vite logo" />
        </a>
      </div>
      <button onClick={() => setCount(count => count + 1)}>Count {count}</button>
    </div>
  );
};

export default SideBar;
