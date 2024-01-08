import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';

import { useClusters } from 'utils/hooks';
import { useAuth } from 'utils/hooks/useAuth';
import LogoLink from 'layouts/SharedLayout/Header/LogoLink/LogoLink';
import ClustersSearchBar from 'components/ClusterBars/ClusterSearchBar';
import ProfileBtn from 'layouts/SharedLayout/Header/ProfileBtn/ProfileBtn';
import FlexWrap from 'components/shared/FlexWrap/FlexWrap';
import { themes } from 'styles/themes';
import { barW } from 'layouts/SharedLayout/SharedLayout';

import { StyledHeader, Nav, Title } from './Header.styled';

const { s } = themes.indents;

const Header = ({ $height }) => {
  const { pathname } = useLocation();
  const { isLoggedIn } = useAuth();
  const { activeCluster: ac } = useClusters();

  return (
    <StyledHeader $height={$height}>
      <FlexWrap $w={barW} $p={`0 ${s} 0 0`} $ai="center">
        <LogoLink />
        <Nav>
          <NavLink to="/">Home</NavLink>
          {isLoggedIn && <NavLink to="/cluster">Cluster</NavLink>}
          {isLoggedIn && <NavLink to={`/element/${ac?._id}`}>Element</NavLink>}
        </Nav>
        <Title>
          {ac?.group} {ac?.title}
        </Title>
      </FlexWrap>

      <FlexWrap $w={`calc(100% - ${barW})`} $p={`0 0 0 ${s}`} $ai="center">
        {pathname === '/cluster' && <ClustersSearchBar />}

        {isLoggedIn && <ProfileBtn />}
      </FlexWrap>
    </StyledHeader>
  );
};

export default Header;

Header.propTypes = {
  $height: PropTypes.string.isRequired,
};
