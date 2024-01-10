import { useDispatch } from 'react-redux';

import {
  cleanCluster,
  cleanGroup,
  setActiveCluster,
  setClusterFilter,
  setClusterSelect,
  setClusterTrash,
} from 'store/cluster/clusterSlice';
import {
  cleanElement,
  setElementTrash,
  setElementFilter,
  setElementSelect,
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
    dispatch(setElementSelect([]));
    dispatch(setClusterSelect([]));
    dispatch(setClusterTrash([]));
    dispatch(setElementTrash([]));
  };

  return (
    <Form>
      <Button onClick={handleLogOut}>Log out</Button>
    </Form>
  );
};

export default ProfileForm;
