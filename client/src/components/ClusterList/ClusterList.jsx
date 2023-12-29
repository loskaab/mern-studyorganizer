import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  fetchClustersThunk,
  fetchGroupsThunk,
} from 'store/cluster/clusterThunks';
import { useClusters } from 'utils/hooks';

import LiGroup from './Li/LiGroup';
import LiCluster from './Li/LiCluster';
import { List } from './ClusterList.styled';

const ClusterList = () => {
  const dispatch = useDispatch();
  const { allClusters, clusterFilter, clusterSelect, clusterChecked } =
    useClusters();

  useEffect(() => {
    dispatch(fetchGroupsThunk());
    dispatch(fetchClustersThunk());
  }, [dispatch]);

  const filtredClusters = [...allClusters]
    .filter(({ cluster, title, checked }) => {
      const allFiltred =
        cluster.toLowerCase().includes(clusterFilter) ||
        title.toLowerCase().includes(clusterFilter);

      const unCompleted = checked !== clusterChecked;

      return clusterChecked ? allFiltred && unCompleted : allFiltred;
    })
    .sort((a, b) => a.title.localeCompare(b.title));

  const filtredGroups = Array.from(
    new Set(filtredClusters.map(el => el.group)),
  ).sort((a, b) => a.localeCompare(b));

  const selectedGroups = filtredGroups.filter(el => {
    if (clusterSelect) {
      return el === clusterSelect && el;
    } else return el;
  });

  return (
    <List>
      {selectedGroups.map(group => (
        <Fragment key={group}>
          <LiGroup group={group} />

          {filtredClusters.map(
            el => el.group === group && <LiCluster key={el._id} el={el} />,
          )}
        </Fragment>
      ))}
    </List>
  );
};

export default ClusterList;
