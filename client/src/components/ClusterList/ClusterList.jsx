import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  fetchClustersThunk,
  fetchGroupsThunk,
} from 'store/cluster/clusterThunks';
import { useClusters } from 'utils/hooks';

import LiHead from './Li/LiHead';
import LiContent from './Li/LiContent';
import { List } from './ClusterList.styled';

const ClusterList = () => {
  const dispatch = useDispatch();
  const { allClusters, clusterFilter, clusterGroups } = useClusters();

  useEffect(() => {
    dispatch(fetchGroupsThunk());
    dispatch(fetchClustersThunk());
  }, [dispatch]);

  const filtredGroups = [...clusterGroups]
    .filter(el => el.clusterGroup.toLowerCase().includes(clusterFilter))
    .map(el => el.clusterGroup)
    .sort((a, b) => a.localeCompare(b));

  const filtredClusters = [...allClusters]
    .filter(({ cluster, title }) => {
      return (
        cluster.toLowerCase().includes(clusterFilter) ||
        title.toLowerCase().includes(clusterFilter)
      );
    })
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <List>
      {filtredGroups.map(group => (
        <Fragment key={group}>
          <LiHead group={group} />

          {filtredClusters.map(
            el => el.group === group && <LiContent key={el._id} el={el} />,
          )}
        </Fragment>
      ))}
    </List>
  );
};

export default ClusterList;
