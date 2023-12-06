import { useDispatch } from 'react-redux';

import {
  cleanCluster,
  cleanGroup,
  setClusterFilter,
} from 'store/cluster/clusterSlice';
import { logoutThunk } from 'store/auth/authThunks';
import Button from 'components/shared/Button/Button';

import { Form } from './ProfileForm.styled';

const ProfileForm = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logoutThunk());
    dispatch(cleanCluster());
    dispatch(cleanGroup());
    dispatch(setClusterFilter(''));
    // dispatch(setActiveElement(null));
  };

  return (
    <Form>
      <Button onClick={handleLogOut}>Log out</Button>
    </Form>
  );
};

export default ProfileForm;
