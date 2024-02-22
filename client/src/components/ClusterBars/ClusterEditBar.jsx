import { useState } from 'react';

import AddClusterForm from 'components/ClusterForms/ClusterAddForm';
import GridWrap from 'components/shared/GridWrap/GridWrap';
import Modal from 'components/shared/Modal/Modal';
import { themes } from 'styles/themes';
import { useClusters } from 'utils/hooks';

import DeleteBtn from './EditBtns/DeleteBtn';
import AddBtn from './EditBtns/AddBtn';

const { s, m } = themes.indents;

const ClusterEditBar = () => {
  const { clusterTrash } = useClusters();
  const [isModal, setIsModal] = useState(false);
  const [clipboardText, setClipboardText] = useState('');
  const [group, setGroup] = useState('');

  const isDeleteBtn = clusterTrash.length > 0 ? ' 1fr' : '';
  const gtc = '1fr' + isDeleteBtn;

  return (
    <>
      <GridWrap
        $m={`${s} ${m}`}
        $pos="fixed"
        $side="right"
        $high="bottom"
        $gtc={gtc}
      >
        {isDeleteBtn && <DeleteBtn />}
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
