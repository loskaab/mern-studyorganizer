import { useDispatch } from 'react-redux';

import Button from 'components/shared/Button/Button';
import { themes } from 'styles/themes';
import { useGdrive } from 'utils/hooks';
import { getFileThunk } from 'store/gdrive/gdriveThunks';

const { button } = themes.shadows;

const DownloadBtn = () => {
  const dispatch = useDispatch();
  const { gdriveCheck } = useGdrive();

  const downloadFiles = () => {
    gdriveCheck.forEach(el => {
      dispatch(getFileThunk({ fileId: el.id, fileName: el.name }));
    });
  };

  return (
    <Button onClick={downloadFiles} $s="m" $bs={button}>
      download
    </Button>
  );
};

export default DownloadBtn;
