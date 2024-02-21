import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import Button from 'components/shared/Button/Button';
import { useClusters, useGdrive } from 'utils/hooks';
import { deleteFileThunk, listFilesThunk } from 'store/gdrive/gdriveThunks';
import { emptyGdriveTrash, setActiveFile } from 'store/gdrive/gdriveSlice';
import { themes } from 'styles/themes';

const { button } = themes.shadows;

const DeleteBtn = () => {
  const dispatch = useDispatch();
  const { activeFile, gdriveTrash } = useGdrive();
  const { allClusters } = useClusters();

  const handleDeleteFiles = async () => {
    if (!confirm('Are you sure you want to delete the selected File(s)?')) {
      return;
    }
    // delete trash files
    let counter = 0;
    await gdriveTrash.forEach((el, i) => {
      const isInClusters = allClusters.some(
        ({ gdriveId }) => gdriveId === el.id,
      );
      if (isInClusters) {
        return toast.error(`${el.name} is in Clusters`);
      }

      if (i !== gdriveTrash.length - 1) {
        dispatch(deleteFileThunk(el.id))
          .then((counter += 1))
          .catch(err => toast.error(err.message));
      } else {
        dispatch(deleteFileThunk(el.id))
          .then((counter += 1))
          .then(() => toast.success(`${counter} file(s) deleted`))
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
