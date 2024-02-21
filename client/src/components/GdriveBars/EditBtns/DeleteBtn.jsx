import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import Button from 'components/shared/Button/Button';
import { useGdrive } from 'utils/hooks';
import { deleteFileThunk, listFilesThunk } from 'store/gdrive/gdriveThunks';
import { themes } from 'styles/themes';
import { emptyGdriveTrash, setActiveFile } from 'store/gdrive/gdriveSlice';

const { button } = themes.shadows;

const DeleteBtn = () => {
  const dispatch = useDispatch();
  const { activeFile, gdriveTrash } = useGdrive();

  const handleDeleteFiles = async () => {
    if (!confirm('Are you sure you want to delete the selected File(s)?')) {
      return;
    }
    // delete trash files
    await gdriveTrash.forEach((el, i) => {
      if (i !== gdriveTrash.length - 1) {
        dispatch(deleteFileThunk(el.id)).catch(err => toast.error(err.message));
      } else {
        dispatch(deleteFileThunk(el.id))
          .then(() => toast.success(`${i + 1} file(s) deleted`))
          .then(() => dispatch(listFilesThunk()))
          .catch(err => toast.error(err.message));
      }
    });
    dispatch(emptyGdriveTrash());
    const trashId = gdriveTrash.map(el => el.id);
    trashId.includes(activeFile?.id) && dispatch(setActiveFile(null));
  };

  return (
    <Button onClick={handleDeleteFiles} $s="m" $bs={button}>
      Delete
    </Button>
  );
};

export default DeleteBtn;
