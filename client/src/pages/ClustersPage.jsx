import { useState } from 'react';
import { toast } from 'react-toastify';

import { themes } from 'styles/themes';

import { readClipboard } from 'utils/helpers';
import Button from 'components/shared/Button/Button';
import FlexWrap from 'components/shared/FlexWrap/FlexWrap';
import ClustersList from 'components/ClustersList/ClustersList';
import ControlBar from 'components/shared/ControlBar/ControlBar';
import Modal from 'components/shared/Modal/Modal';
import ClusterForm from 'components/ClusterForm/ClusterForm';

const ClustersPage = () => {
  const [isModal, setIsModal] = useState(false);
  const [clipboardText, setClipboerdText] = useState('');

  const addCluster = async () => {
    // const text = window.getSelection().toString(); text && (await writeClipboard(text));
    setClipboerdText(await readClipboard());
    // console.log(await readClipboard());
    if (clipboardText.length < 10) {
      toast.error('Coopy valid cluster');
    } else {
      setIsModal(true);
    }
  };

  return (
    <FlexWrap $p={`${themes.indent.s} ${themes.indent.m}`}>
      <ClustersList />

      <ControlBar $x="right" $y="bottom" $gtc="1fr 1fr">
        <Button $size="m">Edit</Button>
        <Button $size="m" onClick={addCluster}>
          Add
        </Button>
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
