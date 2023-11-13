import { LinkMern } from './MainLayout.styled';
import mernLogo from 'assets/images/mern.png';

const MainLayout = () => {
  return (
    <div>
      <LinkMern href="https://github.com/Belka-S/mern_starter" target="_blank" rel="noreferrer">
        <img src={mernLogo} alt="MERN logo" />
      </LinkMern>
      <p>
        Edit <code>server/src/ & client/src/</code> to develop MERN app.
      </p>
      <p>Click on the Vite, React or MERN logos to learn more</p>
    </div>
  );
};

export default MainLayout;
