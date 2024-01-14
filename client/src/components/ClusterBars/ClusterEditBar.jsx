import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { useClusters } from 'utils/hooks';
import { deleteClusterThunk } from 'store/cluster/clusterThunks';
import {
  emptyClusterTrash,
  setActiveCluster,
} from 'store/cluster/clusterSlice';

import { readClipboard } from 'utils/helpers';
import { clusterSchema } from 'utils/validation';
import GridWrap from 'components/shared/GridWrap/GridWrap';
import Button from 'components/shared/Button/Button';
import Modal from 'components/shared/Modal/Modal';
import AddClusterForm from 'components/ClusterForms/ClusterAddForm';
import { themes } from 'styles/themes';

const { button } = themes.shadows;
const { s, m } = themes.indents;

const ClusterEditBar = () => {
  const dispatch = useDispatch();
  const { activeCluster, clusterTrash } = useClusters();
  const [isModal, setIsModal] = useState(false);
  const [clipboardText, setClipboardText] = useState('');
  const [group, setGroup] = useState('');

  const isTrashBtn = clusterTrash.length > 0;

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === '+') addCluster();
    };
    addEventListener('keydown', handleKeyDown);
    return () => {
      removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const addCluster = async e => {
    const cluster = await readClipboard();
    try {
      await clusterSchema.validate({ cluster });
      setClipboardText(cluster);
      setIsModal('add');
      // set cursor on input
    } catch (err) {
      e?.target.blur();
      toast.error(`Invalid cluster, ${err.message}`);
    }
  };

  const emptyTrash = () => {
    if (!confirm('Are you sure you want to delete the selected Clusters?')) {
      return;
    }
    // delete trash clusters
    dispatch(deleteClusterThunk(clusterTrash.map(el => el._id).join('&')))
      .then(() => {
        const trashId = clusterTrash.map(el => el._id);
        const { _id } = activeCluster;
        trashId.includes(_id) && dispatch(setActiveCluster(null));
      })
      .then(() => dispatch(emptyClusterTrash()));
  };

  return (
    <GridWrap
      $m={`${s} ${m}`}
      $pos="fixed"
      $side="right"
      $high="bottom"
      $gtc="1fr 1fr"
    >
      {isTrashBtn ? (
        <Button onClick={emptyTrash} $s="m" $bs={button}>
          Delete
        </Button>
      ) : (
        <span></span>
      )}

      <Button onClick={addCluster} $s="m" $bs={button}>
        Add
      </Button>

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
    </GridWrap>
  );
};

export default ClusterEditBar;
