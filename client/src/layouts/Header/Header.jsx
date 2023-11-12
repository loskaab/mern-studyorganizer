// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

// import { logoutThunk } from 'store/auth/authOperations';
// import { cleanContacts, setActiveContact } from 'store/contacts/contactsSlice';
// import { setFilterValue } from 'store/contacts/contactsSlice';
// import { useAuth } from 'utils/hooks/useAuth';
import { StyledHeader, NavLink, Div } from './Header.styled';
import mernLogo from 'assets/icons/favicon.png';
import Button from 'components/shared/Button/Button';
// import OvalLoader from 'components/shared/Loader/OvalLoader';

const Header = () => {
  // const dispatch = useDispatch();
  // const { isLoggedIn, user } = useAuth();

  const handleLogOut = () => {
    //   dispatch(logoutThunk());
    //   dispatch(cleanContacts());
    //   dispatch(setActiveContact(null));
    //   dispatch(setFilterValue(''));
    console.log('handleLogOut');
  };

  return (
    <StyledHeader>
      <a href="https://github.com/Belka-S/mern_starter" target="_blank" rel="noopener noreferrer">
        <img src={mernLogo} height="36" width="36" alt="MERN logo" />
      </a>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cluster">Cluster</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </nav>
      {/* {isLoggedIn && ( */}
      <Div>
        {/* <p>{user.email}</p> */}
        <Button onClick={handleLogOut}>Log out</Button>
      </Div>
      {/* )} */}
    </StyledHeader>
  );
};

export default Header;
