import { useDispatch } from 'react-redux';

import {
  cleanCluster,
  cleanGroup,
  setActiveCluster,
  setClusterFilter,
  setClusterSelect,
  emptyClusterTrash,
} from 'store/cluster/clusterSlice';
import {
  cleanElement,
  setElementFilter,
  setElementSelect,
  emptyElementTrash,
} from 'store/element/elementSlice';
import {
  emptyFiles,
  setActiveFile,
  setGdriveFilter,
  setGdriveSelect,
  emptyGdriveCheck,
  emptyGdriveTrash,
} from 'store/gdrive/gdriveSlice';
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
    dispatch(setClusterFilter(''));
    dispatch(setClusterSelect([]));
    dispatch(emptyClusterTrash());

    dispatch(cleanElement());
    dispatch(setElementFilter(''));
    dispatch(setElementSelect([]));
    dispatch(emptyElementTrash());

    dispatch(emptyFiles());
    dispatch(setActiveFile(null));
    dispatch(setGdriveFilter(''));
    dispatch(setGdriveSelect([]));
    dispatch(emptyGdriveCheck());
    dispatch(emptyGdriveTrash());
  };

  return (
    <Form>
      <Button onClick={handleLogOut}>Log out</Button>
    </Form>
  );
};

export default ProfileForm;
