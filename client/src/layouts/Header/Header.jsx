import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';

import { useAuth } from 'utils/hooks/useAuth';
import LogoLink from 'components/LogoLink/LogoLink';
import ClustersSearchBar from 'components/ClusterBars/ClusterSearchBar';
import ProfileBtn from 'components/ProfileBtn/ProfileBtn';

import { StyledHeader, Nav } from './Header.styled';

const Header = ({ $height }) => {
  const { pathname } = useLocation();
  const { isLoggedIn } = useAuth();

  return (
    <StyledHeader $height={$height}>
      <LogoLink />

      <Nav>
        <NavLink to="/">Home</NavLink>
        {isLoggedIn && <NavLink to="/cluster">Clusters</NavLink>}
        {/* {isLoggedIn && <NavLink to="/profile">Profile</NavLink>} */}
      </Nav>

      {pathname === '/cluster' && <ClustersSearchBar />}

      {isLoggedIn && <ProfileBtn />}
    </StyledHeader>
  );
};

export default Header;

Header.propTypes = {
  $height: PropTypes.string.isRequired,
};
