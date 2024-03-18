import PropTypes from 'prop-types';

import mernLogo from 'assets/images/mern.png';

import { LinkMern } from './MainLayout.styled';

const MainLayout = ({ children }) => {
  return (
    <div>
      <LinkMern
        href="https://github.com/Belka-S/mern-studyorganizer"
        target="_blank"
        rel="noreferrer"
      >
        <img src={mernLogo} alt="MERN logo" />
      </LinkMern>
      <p>
        Edit <code>server/src/ & client/src/</code> to develop MERN app.
      </p>
      <p>Click on the Vite, React or MERN logos to learn more.</p>

      {children}
    </div>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.oneOf(['img', 'png', 'svg']),
  ]),
};
