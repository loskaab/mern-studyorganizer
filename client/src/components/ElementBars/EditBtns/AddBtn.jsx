import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import Button from 'components/shared/Button/Button';
import { readClipboard, writeClipboard, translateText } from 'utils/helpers';
import { addElementThunk } from 'store/element/elementThunks';
import { useAuth, useClusters } from 'utils/hooks';
import { themes } from 'styles/themes';

const { button } = themes.shadows;

const AddBtn = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { activeCluster } = useClusters();

  const addElement = async e => {
    const text = window.getSelection().toString();
    text && (await writeClipboard(text));
    // document.execCommand('copy');
    const element = (await readClipboard()).trim();
    const translation = { from: activeCluster.lang, to: user.lang };
    const caption = await translateText(element, translation);
    const { _id } = activeCluster;
    try {
      dispatch(addElementThunk({ element, caption, cluster: _id }));
      e.target.blur();
    } catch (err) {
      e.target.blur();
      toast.error(`Invalid element, ${err.message}`);
    }
  };

  return (
    <Button onClick={addElement} $s="m" $bs={button}>
      add
    </Button>
  );
};

export default AddBtn;
