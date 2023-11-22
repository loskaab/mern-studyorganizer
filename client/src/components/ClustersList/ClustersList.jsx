import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchClustersThunk } from 'store/clusters/clustersThunks';
import { useClusters } from 'utils/hooks';
import { getUnique } from 'utils/helpers';

import LiHead from './Li/LiHead';
import LiContent from './Li/LiContent';
import { List } from './ClustersList.styled';

const ClustersList = () => {
  const dispatch = useDispatch();
  const { allClusters, clustersFilter } = useClusters();

  const filtredClusters = [...allClusters]
    .filter(({ cluster, title, group }) => {
      return (
        cluster.toLowerCase().includes(clustersFilter) ||
        title.toLowerCase().includes(clustersFilter) ||
        group.toLowerCase().includes(clustersFilter)
      );
    })
    .sort((a, b) => a.title.localeCompare(b.title));

  const filtredGroups = getUnique(filtredClusters, 'group').sort((a, b) =>
    a.localeCompare(b),
  );

  useEffect(() => {
    dispatch(fetchClustersThunk());
  }, [dispatch]);

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
