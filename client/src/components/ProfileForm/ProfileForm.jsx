import { useDispatch } from 'react-redux';

import { logoutThunk } from 'store/auth/authThunks';
// import { useAuth } from 'utils/hooks/useAuth';
import Button from 'components/shared/Button/Button';

import { Form } from './ProfileForm.styled';

const ProfileForm = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logoutThunk());
    // dispatch(cleanElements());
    // dispatch(setActiveElement(null));
    // dispatch(setelementFilter(''));
  };

  return (
    <Form>
      <Button onClick={handleLogOut}>Log out</Button>
    </Form>
  );
};

export default ProfileForm;
