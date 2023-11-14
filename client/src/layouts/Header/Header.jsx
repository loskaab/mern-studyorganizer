// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

// import { logoutThunk } from 'store/auth/authOperations';
// import { cleanElements, setActiveElement } from 'store/elements/elementsSlice';
// import { setFilterValue } from 'store/elements/elementsSlice';
// import { useAuth } from 'utils/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

import mernLogo from 'assets/icons/favicon.png';
import Button from 'components/shared/Button/Button';

import { StyledHeader, NavLink, Div } from './Header.styled';
// import OvalLoader from 'components/shared/Loader/OvalLoader';

const Header = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const { isLoggedIn, user } = useAuth();

  const handleLogIn = () => {
    navigate('/signin', { replace: true });
  };

  const handleLogOut = () => {
    //   dispatch(logoutThunk());
    //   dispatch(cleanElements());
    //   dispatch(setActiveElement(null));
    //   dispatch(setFilterValue(''));
  };

  return (
    <StyledHeader>
      <a href="https://github.com/Belka-S/mern_starter" target="_blank" rel="noopener noreferrer">
        <img src={mernLogo} height="32" width="32" alt="MERN logo" />
      </a>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/cluster">Cluster</NavLink>
      </nav>
      {/* {isLoggedIn && ( */}
      <Div>
        {/* <p>{user.email}</p> */}
        <Button onClick={handleLogIn}>Log in</Button>
        <Button onClick={handleLogOut}>Log out</Button>
      </Div>
      {/* )} */}
    </StyledHeader>
  );
};

export default Header;
