import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { useClusters } from 'utils/hooks';
import {
  deleteClusterThunk,
  deleteGroupThunk,
  fetchClustersThunk,
} from 'store/cluster/clusterThunks';
import { emptyClusterTrash } from 'store/cluster/clusterSlice';

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
  const [isModal, setIsModal] = useState(false);
  const { clusterTrash, clusterGroups } = useClusters();
  const [clipboardText, setClipboardText] = useState('');

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

  const emptyTrash = async () => {
    if (!confirm('Are you sure you want to delete the selected Clusters?')) {
      return;
    }
    // delete trash clusters
    await clusterTrash.forEach(el => dispatch(deleteClusterThunk(el._id)));
    dispatch(emptyClusterTrash());
    // delete empty clusterGroups
    const toDeleteClusterGroupeId = [];
    await dispatch(fetchClustersThunk())
      .unwrap()
      .then(pld => {
        const { clusters } = pld.result;
        const newClusterGroups = Array.from(
          new Set(clusters.map(el => el.group)),
        );
        clusterGroups.forEach(el => {
          if (newClusterGroups.includes(el.clusterGroup)) return;
          toDeleteClusterGroupeId.push(el._id);
        });
      });
    toDeleteClusterGroupeId.forEach(el => dispatch(deleteGroupThunk(el)));
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
          <AddClusterForm cluster={clipboardText} setIsModal={setIsModal} />
        </Modal>
      )}
    </GridWrap>
  );
};

export default ClusterEditBar;
