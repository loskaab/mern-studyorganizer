import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { useClusters } from 'utils/hooks';
import { setClusterChecked } from 'store/cluster/clusterSlice';
import { readClipboard } from 'utils/helpers';
import { clusterSchema } from 'utils/validation';
import GridWrap from 'components/shared/GridWrap/GridWrap';
import Button from 'components/shared/Button/Button';
import Modal from 'components/shared/Modal/Modal';
import AddClusterForm from 'components/ClusterForms/ClusterAddForm';
import { themes } from 'styles/themes';

const { button } = themes.shadows;

const ClusterEditBar = () => {
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);
  const [clipboardText, setClipboerdText] = useState('');
  const { clusterChecked } = useClusters();

  const addCluster = async e => {
    // const text = window.getSelection().toString(); text && (await writeClipboard(text));
    const cluster = await readClipboard();
    try {
      await clusterSchema.validate({ cluster });
      setClipboerdText(cluster);
      setIsModal('add');
    } catch (err) {
      e.target.blur();
      toast.error(`Invalid cluster, ${err.message}`);
    }
  };

  const handleCompleted = e => {
    dispatch(setClusterChecked(!clusterChecked));
    e.target.blur();
  };

  return (
    <GridWrap
      $m="15px 25px"
      $pos="fixed"
      $side="right"
      $high="bottom"
      $gtc="1fr 1fr"
    >
      <Button onClick={handleCompleted} $s="m" $bs={button}>
        {clusterChecked ? 'Show' : 'Hide'}
      </Button>

      <Button onClick={addCluster} $s="m" $bs={button}>
        Add
      </Button>

      {isModal && (
        <Modal onClick={() => setIsModal(false)}>
          <AddClusterForm cluster={clipboardText} setIsModal={setIsModal} />
        </Modal>
      )}
    </GridWrap>
  );
};

export default ClusterEditBar;
