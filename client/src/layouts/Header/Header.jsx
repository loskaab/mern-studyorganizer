import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// import { cleanElements, setActiveElement } from 'store/elements/elementsSlice';
// import { setFilterValue } from 'store/elements/elementsSlice';
import { logoutThunk } from 'store/auth/authThunks';
import { useAuth } from 'utils/hooks/useAuth';
import mernLogo from 'assets/icons/favicon.png';
import Button from 'components/shared/Button/Button';

import { StyledHeader, NavLink, Div } from './Header.styled';

const Header = () => {
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
    // dispatch(setFilterValue(''));
  };

  return (
    <StyledHeader>
      <a
        href="https://github.com/Belka-S/mern_starter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={mernLogo} height="32" width="32" alt="MERN logo" />
      </a>

      <nav>
        {!isLoggedIn && <NavLink to="/">Home</NavLink>}
        {isLoggedIn && <NavLink to="/profile">Profile</NavLink>}
        {isLoggedIn && <NavLink to="/cluster">Clusters</NavLink>}
      </nav>

      <Div>
        {isLoggedIn && <p>{user.email}</p>}
        {isLoggedIn && <Button onClick={handleLogOut}>Log out</Button>}
        {!isLoggedIn && <Button onClick={handleLogIn}>Log in</Button>}
      </Div>
    </StyledHeader>
  );
};

export default Header;
