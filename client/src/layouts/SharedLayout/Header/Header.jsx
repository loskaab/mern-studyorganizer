import PropTypes from 'prop-types';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import ClustersSearchBar from 'components/ClusterBars/ClusterSearchBar';
import ElementSearchBar from 'components/ElementBars/ElementSearchBar';
import FlexWrap from 'components/shared/FlexWrap/FlexWrap';
import { useClusters, useGdrive } from 'utils/hooks';
import { useAuth } from 'utils/hooks/useAuth';
import { barW } from 'layouts/SharedLayout/SharedLayout';
import { themes } from 'styles/themes';

import Logo from './Logo/Logo';
import ProfileBtn from './ProfileBtn/ProfileBtn';
import { StyledHeader, Nav, TitleBtn } from './Header.styled';

const { s } = themes.indents;

const Header = ({ $height }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const { activeCluster: ac } = useClusters();
  const { activeFile: af } = useGdrive();

  const activeFileEl = document.getElementById('active-file');

  const scrollOnActive = () => {
    activeFileEl?.scrollIntoView({ block: 'center', behavior: 'smooth' });
  };

  const scrollOnTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scroll = () => {
    const positionY = activeFileEl?.getBoundingClientRect().y;
    const isVisible = window.innerHeight > positionY;
    isVisible ? scrollOnTop() : scrollOnActive();
  };

  const handleNavigate = () => {
    if (pathname.includes('/cluster')) {
      navigate(`/element/${ac?._id}`, { replace: true });
    }
    if (pathname.includes('/element')) {
      navigate('/cluster', { replace: true });
    }
    if (pathname.includes('/gdrive')) {
      scroll();
    }
  };

  const clusterTitle = () => {
    const paths = ['cluster', 'element'];
    const isTitle = paths.some(el => pathname.includes(el));
    if (isTitle && ac?.group && ac?.title) {
      return `${ac.group} ${ac.title}`;
    }
  };

  const gdriveTitle = () => {
    const isTitle = pathname === '/gdrive';
    if (isTitle && af?.name) return af.name;
  };

  return (
    <StyledHeader $height={$height}>
      <FlexWrap $w={barW} $p={`0 ${s} 0 0`} $ai="center">
        <Nav>
          <NavLink to="/">
            <Logo />
          </NavLink>

          {isLoggedIn && <NavLink to="/gdrive">G-Drive</NavLink>}
          {isLoggedIn && <NavLink to="/cluster">Cluster</NavLink>}
          {isLoggedIn && <NavLink to={`/element/${ac?._id}`}>Element</NavLink>}
        </Nav>

        <TitleBtn onClick={handleNavigate}>
          {clusterTitle()}
          {gdriveTitle()}
        </TitleBtn>
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
