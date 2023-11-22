import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';

import { useAuth } from 'utils/hooks/useAuth';
import GridWrap from 'components/shared/GridWrap/GridWrap';
import LogoLink from 'components/shared/LogoLink/LogoLink';
import ProfileBtn from 'components/ProfileBtn/ProfileBtn';
import ClustersFilter from 'components/Filters/ClustersFilter';
import ClustersSelect from 'components/Selects/ClustersSelect';

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

      <GridWrap $w="55%" $cg="20px" $ai="center" $gtc="2fr 1fr">
        {pathname === '/cluster' && <ClustersFilter />}
        {pathname === '/cluster' && <ClustersSelect />}
      </GridWrap>

      {isLoggedIn && <ProfileBtn />}
    </StyledHeader>
  );
};

export default Header;

Header.propTypes = {
  $height: PropTypes.string.isRequired,
};
