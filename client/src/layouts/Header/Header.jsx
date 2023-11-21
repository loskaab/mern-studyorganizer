import PropTypes from 'prop-types';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// import { cleanElements, setActiveElement } from 'store/elements/elementsSlice';
// import { setElementsFilter } from 'store/elements/elementsSlice';
import { logoutThunk } from 'store/auth/authThunks';
import { useAuth } from 'utils/hooks/useAuth';
import mernLogo from 'assets/icons/favicon.png';
import Button from 'components/shared/Button/Button';

import { StyledHeader, LogoLink, Nav } from './Header.styled';

const Header = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useAuth();

  const handleLogIn = () => {
    navigate('/signin', { replace: true });
  };

  const handleLogOut = () => {
    dispatch(logoutThunk());
    // dispatch(cleanElements());
    // dispatch(setActiveElement(null));
    // dispatch(setElementsFilter(''));
  };

  return (
    <StyledHeader>
      <LogoLink
        href="https://github.com/Belka-S/mern_starter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={mernLogo} height="32" width="32" alt="MERN logo" />
      </LogoLink>

      <Nav>
        {!isLoggedIn && <NavLink to="/">Home</NavLink>}
        {isLoggedIn && <NavLink to="/profile">Profile</NavLink>}
        {isLoggedIn && <NavLink to="/cluster">Clusters</NavLink>}
      </Nav>

      {children}

      {isLoggedIn && <p style={{ margin: '0 20px' }}>{user.email}</p>}
      {isLoggedIn && <Button onClick={handleLogOut}>Log out</Button>}
      {!isLoggedIn && <Button onClick={handleLogIn}>Log in</Button>}
    </StyledHeader>
  );
};

export default Header;

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.oneOf(['img', 'png', 'svg']),
  ]),
};
