import mernLogo from 'assets/icons/favicon.png';

import { LogoImg } from './Logo.styled';

const Logo = () => {
  return <LogoImg src={mernLogo} height="32" width="32" alt="MERN logo" />;
};

export default Logo;
