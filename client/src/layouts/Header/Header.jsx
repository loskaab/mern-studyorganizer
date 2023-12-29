import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';

import { useClusters } from 'utils/hooks';
import { useAuth } from 'utils/hooks/useAuth';
import LogoLink from 'layouts/Header/LogoLink/LogoLink';
import ClustersSearchBar from 'components/ClusterBars/ClusterSearchBar';
import ProfileBtn from 'layouts/Header/ProfileBtn/ProfileBtn';

import { StyledHeader, Nav } from './Header.styled';

const Header = ({ $height }) => {
  const { pathname } = useLocation();
  const { isLoggedIn } = useAuth();
  const { activeCluster } = useClusters();

  const { _id } = activeCluster;

  return (
    <StyledHeader $height={$height}>
      <LogoLink />

      <Nav>
        <NavLink to="/">Home</NavLink>
        {isLoggedIn && <NavLink to="/cluster">Cluster</NavLink>}
        {isLoggedIn && <NavLink to={`/element/${_id}`}>Element</NavLink>}
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
