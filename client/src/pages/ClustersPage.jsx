import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { themes } from 'styles/themes';
import { readClipboard } from 'utils/helpers';
import { addClusterThunk } from 'store/clusters/clustersThunks';

import Button from 'components/shared/Button/Button';
import FlexWrap from 'components/shared/FlexWrap/FlexWrap';
import ClustersList from 'components/ClustersList/ClustersList';
import ControlBar from 'components/shared/ControlBar/ControlBar';
import Modal from 'components/shared/Modal/Modal';
import ClusterForm from 'components/ClusterForm/ClusterForm';

const ClustersPage = () => {
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);

  const handleAddCluster = async () => {
    // const text = window.getSelection().toString();
    // text && (await writeClipboard(text));

    setIsModal(false);

    const clipboardText = await readClipboard();
    dispatch(addClusterThunk({ cluster: clipboardText }));
  };

  return (
    <FlexWrap $p={`${themes.indent.s} ${themes.indent.m}`}>
      <ClustersList />

      <ControlBar $x="right" $y="bottom" $gtc="1fr 1fr">
        <Button $s="m">Edit</Button>
        <Button $s="m" onClick={() => setIsModal(true)}>
          Add
        </Button>
      </ControlBar>

      {isModal && (
        <Modal onClick={handleAddCluster}>
          <ClusterForm />
        </Modal>
      )}
    </FlexWrap>
  );
};

export default ClustersPage;
