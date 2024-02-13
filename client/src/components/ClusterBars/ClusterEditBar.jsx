import { useState } from 'react';

import AddClusterForm from 'components/ClusterForms/ClusterAddForm';
import GridWrap from 'components/shared/GridWrap/GridWrap';
import Modal from 'components/shared/Modal/Modal';
import { themes } from 'styles/themes';
import { useClusters } from 'utils/hooks';

import DeleteBtn from './EditBtns/DeleteBtn';
import AddBtn from './EditBtns/AddBtn';
import GdriveBtn from './EditBtns/GdriveBtn';

const { s, m } = themes.indents;

const ClusterEditBar = () => {
  const { clusterTrash } = useClusters();
  const [isModal, setIsModal] = useState(false);
  const [clipboardText, setClipboardText] = useState('');
  const [group, setGroup] = useState('');

  const isTrashBtn = clusterTrash.length > 0;

  return (
    <>
      <GridWrap
        $m={`${s} ${m}`}
        $pos="fixed"
        $side="right"
        $high="bottom"
        $gtc="1fr 1fr 1fr 1fr 1fr"
      >
        <GdriveBtn />
        {isTrashBtn ? <DeleteBtn /> : <span></span>}
        <AddBtn setClipboardText={setClipboardText} setIsModal={setIsModal} />
      </GridWrap>

      {isModal && (
        <Modal onClick={() => setIsModal(false)}>
          <AddClusterForm
            cluster={clipboardText}
            group={group}
            setGroup={setGroup}
            setIsModal={setIsModal}
          />
        </Modal>
      )}
    </>
  );
};

export default ClusterEditBar;
