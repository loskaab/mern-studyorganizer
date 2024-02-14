import PropTypes from 'prop-types';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import LogoLink from 'layouts/SharedLayout/Header/LogoLink/LogoLink';
import ClustersSearchBar from 'components/ClusterBars/ClusterSearchBar';
import ElementSearchBar from 'components/ElementBars/ElementSearchBar';
import ProfileBtn from 'layouts/SharedLayout/Header/ProfileBtn/ProfileBtn';
import FlexWrap from 'components/shared/FlexWrap/FlexWrap';
import { useClusters } from 'utils/hooks';
import { useAuth } from 'utils/hooks/useAuth';
import { barW } from 'layouts/SharedLayout/SharedLayout';
import { themes } from 'styles/themes';

import { StyledHeader, Nav, TitleBtn } from './Header.styled';

const { s } = themes.indents;

const Header = ({ $height }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const { activeCluster: ac } = useClusters();

  const isTitle = pathname !== '/' && ac?.group && ac?.title;
  const handleNavi = () => {
    if (pathname.includes('/cluster')) {
      navigate(`/element/${ac?._id}`, { replace: true });
    }
    if (pathname.includes('/element')) {
      navigate('/cluster', { replace: true });
    }
  };

  return (
    <StyledHeader $height={$height}>
      <FlexWrap $w={barW} $p={`0 ${s} 0 0`} $ai="center">
        <LogoLink />
        <Nav>
          <NavLink to="/">Home</NavLink>
          {isLoggedIn && <NavLink to="gdrive">G-Drive</NavLink>}
          {isLoggedIn && <NavLink to="/cluster">Cluster</NavLink>}
          {isLoggedIn && <NavLink to={`/element/${ac?._id}`}>Element</NavLink>}
        </Nav>

        {isTitle && (
          <TitleBtn onClick={handleNavi}>{`${ac.group} ${ac.title}`}</TitleBtn>
        )}
      </FlexWrap>

      <FlexWrap $w={`calc(100% - ${barW})`} $p={`0 0 0 ${s}`} $ai="center">
        {pathname === '/cluster' && <ClustersSearchBar />}
        {pathname.includes('/element/') && <ElementSearchBar />}
        {isLoggedIn && <ProfileBtn />}
      </FlexWrap>
    </StyledHeader>
  );
};

export default Header;

Header.propTypes = {
  $height: PropTypes.string.isRequired,
};
