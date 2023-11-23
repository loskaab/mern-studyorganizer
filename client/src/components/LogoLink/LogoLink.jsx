import mernLogo from 'assets/icons/favicon.png';

import { Link } from './LogoLink.styled';

const LogoLink = () => {
  return (
    <Link
      href="https://github.com/Belka-S/mern_starter"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={mernLogo} height="32" width="32" alt="MERN logo" />
    </Link>
  );
};

export default LogoLink;
