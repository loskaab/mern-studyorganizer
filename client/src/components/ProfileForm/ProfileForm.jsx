import { useDispatch } from 'react-redux';

import {
  cleanCluster,
  cleanGroup,
  emptyClusterTrash,
  setActiveCluster,
  setClusterFilter,
} from 'store/cluster/clusterSlice';
import {
  cleanElement,
  emptyElementTrash,
  setElementFilter,
} from 'store/element/elementSlice';
import { logoutThunk } from 'store/auth/authThunks';
import Button from 'components/shared/Button/Button';

import { Form } from './ProfileForm.styled';

const ProfileForm = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logoutThunk());
    dispatch(setActiveCluster(null));
    dispatch(cleanCluster());
    dispatch(cleanGroup());
    dispatch(cleanElement());
    dispatch(setClusterFilter(''));
    dispatch(setElementFilter(''));
    dispatch(emptyClusterTrash([]));
    dispatch(emptyElementTrash([]));
  };

  return (
    <Form>
      <Button onClick={handleLogOut}>Log out</Button>
    </Form>
  );
};

export default ProfileForm;
