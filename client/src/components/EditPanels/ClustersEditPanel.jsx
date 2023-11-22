import { useState } from 'react';
import { toast } from 'react-toastify';

import { readClipboard } from 'utils/helpers';
import { clusterSchema } from 'utils/validation';
import ControlBar from 'components/shared/ControlBar/ControlBar';
import Button from 'components/shared/Button/Button';

import Modal from 'components/shared/Modal/Modal';
import ClusterForm from 'components/ClusterForm/ClusterForm';

const ClustersEditPanel = () => {
  const [isModal, setIsModal] = useState(false);
  const [clipboardText, setClipboerdText] = useState('');

  const addCluster = async e => {
    // const text = window.getSelection().toString(); text && (await writeClipboard(text));
    const cluster = await readClipboard();
    try {
      await clusterSchema.validate({ cluster });
      setClipboerdText(cluster);
      setIsModal(true);
    } catch (err) {
      e.target.blur();
      toast.error(`Invalid cluster, ${err.message}`);
    }
  };

  return (
    <ControlBar $side="right" $high="bottom" $gtc=" 1fr 1fr">
      <Button $s="m" onClick={addCluster}>
        Add
      </Button>
      <Button $s="m">Edit</Button>

      {isModal && (
        <Modal onClick={() => setIsModal(false)}>
          <ClusterForm clipboardText={clipboardText} setIsModal={setIsModal} />
        </Modal>
      )}
    </ControlBar>
  );
};

export default ClustersEditPanel;
