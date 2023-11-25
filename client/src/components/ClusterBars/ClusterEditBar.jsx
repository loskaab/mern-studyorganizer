import { useState } from 'react';
import { toast } from 'react-toastify';

import { readClipboard } from 'utils/helpers';
import { clusterSchema } from 'utils/validation';
import GridWrap from 'components/shared/GridWrap/GridWrap';
import Button from 'components/shared/Button/Button';
import Modal from 'components/shared/Modal/Modal';
import AddClusterForm from 'components/ClusterForms/ClusterAddForm';
import { themes } from 'styles/themes';

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

  return (
    <GridWrap
      $m="10px 30px"
      $pos="fixed"
      $side="right"
      $high="bottom"
      $gtc=" 1fr"
    >
      <Button name="add" onClick={addCluster} $s="m" $bs={button}>
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
