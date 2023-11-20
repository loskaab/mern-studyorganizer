import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchClustersThunk } from 'store/clusters/clustersThunks';
import { useClusters } from 'utils/hooks';
import { getUnique } from 'utils/helpers';

import Li from './Li/Li';
import { List, LiHead } from './ClustersList.styled';

const ClustersList = () => {
  const dispatch = useDispatch();
  const { allClusters, clustersFilter } = useClusters();

  const filtredClusters = allClusters.filter(el => {
    return (
      el.cluster.toLowerCase().includes(clustersFilter) ||
      el.title.toLowerCase().includes(clustersFilter) ||
      el.group.toLowerCase().includes(clustersFilter)
    );
  });
  const filtredGroups = getUnique(filtredClusters, 'group');

  useEffect(() => {
    dispatch(fetchClustersThunk());
  }, [dispatch]);

  return (
    <List>
      {filtredGroups.map(group => (
        <Fragment key={group}>
          <LiHead>
            <h2>{group}</h2>
          </LiHead>

          {filtredClusters.map(
            el => el.group === group && <Li key={el._id} $el={el} />,
          )}
        </Fragment>
      ))}
    </List>
  );
};

export default ClustersList;
