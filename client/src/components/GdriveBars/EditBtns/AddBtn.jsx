// import PropTypes from 'prop-types';

// import { useDispatch } from 'react-redux';
// import { toast } from 'react-toastify';

import Button from 'components/shared/Button/Button';
// import { listFilesThunk } from 'store/gdrive/gdriveThunks';
import { themes } from 'styles/themes';

const { button } = themes.shadows;

const AddBtn = () => {
  // const dispatch = useDispatch();

  return (
    <Button onClick={() => console.log('qwe')} $s="m" $bs={button}>
      Add
    </Button>
  );
};

export default AddBtn;

// AddBtn.propTypes = {
// setClipboardText: PropTypes.func.isRequired,
//   setIsModal: PropTypes.func.isRequired,
// };
