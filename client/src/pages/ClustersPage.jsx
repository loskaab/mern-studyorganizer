import { useState } from 'react';
import { toast } from 'react-toastify';

import { themes } from 'styles/themes';

import { readClipboard } from 'utils/helpers';
import { clusterSchema } from 'utils/validation';
import Button from 'components/shared/Button/Button';
import FlexWrap from 'components/shared/FlexWrap/FlexWrap';
import ClustersList from 'components/ClustersList/ClustersList';
import ControlBar from 'components/shared/ControlBar/ControlBar';
import Modal from 'components/shared/Modal/Modal';
import ClusterForm from 'components/ClusterForm/ClusterForm';
import ClustersFilter from 'components/Filters/ClustersFilter';

const ClustersPage = () => {
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
    <FlexWrap $p={`${themes.indent.s} ${themes.indent.m}`}>
      <ClustersList />

      <ControlBar $w="60%" $x="right" $y="bottom" $gtc="3fr 1fr 1fr 1fr">
        <ClustersFilter />
        <span></span>
        <Button $s="m" onClick={addCluster}>
          Add
        </Button>
        <Button $s="m">Edit</Button>
      </ControlBar>

      {isModal && (
        <Modal onClick={() => setIsModal(false)}>
          <ClusterForm clipboardText={clipboardText} setIsModal={setIsModal} />
        </Modal>
      )}
    </FlexWrap>
  );
};

export default ClustersPage;
