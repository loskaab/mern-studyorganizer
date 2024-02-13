import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

import Button from 'components/shared/Button/Button';
import { themes } from 'styles/themes';
import { clusterSchema } from 'utils/validation';
import { readClipboard } from 'utils/helpers';

const { button } = themes.shadows;

const AddBtn = ({ setClipboardText, setIsModal }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === '+') addCluster();
    };
    addEventListener('keydown', handleKeyDown);
    return () => {
      removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const addCluster = async e => {
    const cluster = await readClipboard();
    try {
      await clusterSchema.validate({ cluster });
      setClipboardText(cluster);
      setIsModal('add');
      // set cursor on input
    } catch (err) {
      e?.target.blur();
      toast.error(`Invalid cluster, ${err.message}`);
    }
  };
  return (
    <Button onClick={addCluster} $s="m" $bs={button}>
      Add
    </Button>
  );
};

export default AddBtn;

AddBtn.propTypes = {
  setClipboardText: PropTypes.func.isRequired,
  setIsModal: PropTypes.func.isRequired,
};
