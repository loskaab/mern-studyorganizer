import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

// import {
//   deleteClusterThunk,
//   deleteGroupThunk,
//   fetchClustersThunk,
// } from 'store/cluster/clusterThunks';
// import { emptyClusterTrash } from 'store/cluster/clusterSlice';
import { useClusters } from 'utils/hooks';
import { addElementThunk } from 'store/element/elementThunks';
import { readClipboard, writeClipboard } from 'utils/helpers';

import GridWrap from 'components/shared/GridWrap/GridWrap';
import Button from 'components/shared/Button/Button';

import { themes } from 'styles/themes';

const { button } = themes.shadows;

const ElementEditBar = () => {
  const dispatch = useDispatch();
  const { activeCluster } = useClusters();
  // const isTrashBtn = clusterTrash.length > 0;

  const addElement = async e => {
    const text = window.getSelection().toString();
    text && (await writeClipboard(text));
    // document.execCommand('copy');
    const element = (await readClipboard()).trim();
    try {
      dispatch(addElementThunk({ element, cluster: activeCluster.title }));
      e.target.blur();
    } catch (err) {
      e.target.blur();
      toast.error(`Invalid element, ${err.message}`);
    }
  };

  // const emptyTrash = async () => {
  //   if (!confirm('Are you sure you want to delete the selected Clusters?')) {
  //     return;
  //   }
  //   // delete trash clusters
  //   await clusterTrash.forEach(el => dispatch(deleteClusterThunk(el._id)));
  //   dispatch(emptyClusterTrash());
  //   // delete empty clusterGroups
  //   const toDeleteClusterGroupeId = [];
  //   await dispatch(fetchClustersThunk())
  //     .unwrap()
  //     .then(pld => {
  //       const { clusters } = pld.result;
  //       const newClusterGroups = Array.from(
  //         new Set(clusters.map(el => el.group)),
  //       );
  //       clusterGroups.forEach(el => {
  //         if (newClusterGroups.includes(el.clusterGroup)) return;
  //         toDeleteClusterGroupeId.push(el._id);
  //       });
  //     });
  //   toDeleteClusterGroupeId.forEach(el => dispatch(deleteGroupThunk(el)));
  // };

  return (
    <GridWrap
      $m="15px 15px"
      $pos="absolute"
      $side="right"
      $high="bottom"
      $gtc="1fr 1fr"
    >
      {/* {isTrashBtn ? (
        <Button onClick={emptyTrash} $s="m" $bs={button}>
          Delete
        </Button>
      ) : (
        <span></span>
      )} */}
      <span></span>

      <Button onClick={addElement} $s="m" $bs={button}>
        Add
      </Button>
    </GridWrap>
  );
};

export default ElementEditBar;
