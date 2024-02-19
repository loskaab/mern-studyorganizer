import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import Button from 'components/shared/Button/Button';
import { themes } from 'styles/themes';
import { listFilesThunk } from 'store/gdrive/gdriveThunks';
import { signIn } from 'servises/google/gdriveApi';

const { button } = themes.shadows;

const ListBtn = ({ tokenClient }) => {
  const dispatch = useDispatch();

  const handleListFiles = e => {
    const listFiles = () => dispatch(listFilesThunk());
    signIn(tokenClient, listFiles);
    e.target.blur();
  };

  return (
    <Button onClick={handleListFiles} $s="m" $bs={button}>
      List
    </Button>
  );
};

export default ListBtn;

ListBtn.propTypes = {
  tokenClient: PropTypes.object.isRequired,
};
