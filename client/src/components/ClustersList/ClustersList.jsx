import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  fetchClustersThunk,
  fetchGroupsThunk,
} from 'store/clusters/clustersThunks';
import { useClusters } from 'utils/hooks';
import { getUnique } from 'utils/helpers';

import LiHead from './Li/LiHead';
import LiContent from './Li/LiContent';
import { List } from './ClustersList.styled';

const ClustersList = () => {
  const dispatch = useDispatch();
  const { allClusters, clustersFilter } = useClusters();

  useEffect(() => {
    dispatch(fetchClustersThunk());
    dispatch(fetchGroupsThunk());
  }, [dispatch]);

  const filtredClusters = [...allClusters]
    .filter(({ cluster, title }) => {
      return (
        cluster.toLowerCase().includes(clustersFilter) ||
        title.toLowerCase().includes(clustersFilter)
      );
    })
    .sort((a, b) => a.title.localeCompare(b.title));

  const filtredGroups = getUnique(filtredClusters, 'group').sort((a, b) =>
    a.localeCompare(b),
  );

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

export default ClustersList;
