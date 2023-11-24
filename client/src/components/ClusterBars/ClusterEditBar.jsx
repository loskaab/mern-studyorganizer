import { useState } from 'react';
import { toast } from 'react-toastify';

import { readClipboard } from 'utils/helpers';
import { clusterSchema } from 'utils/validation';
import GridWrap from 'components/shared/GridWrap/GridWrap';
import Button from 'components/shared/Button/Button';
import Modal from 'components/shared/Modal/Modal';
import AddClusterForm from 'components/ClusterForms/AddClusterForm';
import { themes } from 'styles/themes';
import EditClusterForm from 'components/ClusterForms/EditClusterForm';

const { button } = themes.shadows;

const ClusterEditBar = () => {
  const [isModal, setIsModal] = useState(false);
  const [clipboardText, setClipboerdText] = useState('');

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

  const editClusters = () => {
    setIsModal('edit');
  };

  return (
    <GridWrap
      $m="10px 30px"
      $pos="fixed"
      $side="right"
      $high="bottom"
      $gtc=" 1fr 1fr"
    >
      <Button name="add" onClick={addCluster} $s="m" $bs={button}>
        Add
      </Button>
      <Button name="edit" onClick={editClusters} $s="m" $bs={button}>
        Edit
      </Button>

      {isModal && (
        <Modal onClick={() => setIsModal(false)}>
          {isModal === 'add' && (
            <AddClusterForm cluster={clipboardText} setIsModal={setIsModal} />
          )}
          {isModal === 'edit' && <EditClusterForm setIsModal={setIsModal} />}
        </Modal>
      )}
    </GridWrap>
  );
};

export default ClusterEditBar;
