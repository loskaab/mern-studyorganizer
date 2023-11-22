import { useDispatch } from 'react-redux';

import { logoutThunk } from 'store/auth/authThunks';
// import { useAuth } from 'utils/hooks/useAuth';
import Button from 'components/shared/Button/Button';

const ProfileForm = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logoutThunk());
    // dispatch(cleanElements());
    // dispatch(setActiveElement(null));
    // dispatch(setElementsFilter(''));
  };

  return <Button onClick={handleLogOut}>Log out</Button>;
};

export default ProfileForm;
