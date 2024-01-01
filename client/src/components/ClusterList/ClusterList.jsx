import { Fragment, useEffect, useState } from 'react';
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
  const { allClusters, clusterFilter, clusterSelect } = useClusters();
  const [sortByDate, setSortByDate] = useState(true);

  useEffect(() => {
    dispatch(fetchGroupsThunk());
    dispatch(fetchClustersThunk());
  }, [dispatch]);

  // cluster filter/favorite/checked
  const filtredClusters = [...allClusters]
    .filter(({ group, title, favorite, checked }) => {
      // filter
      const allFiltred =
        group.toLowerCase().includes(clusterFilter) ||
        title.toLowerCase().includes(clusterFilter);
      // filter + favorite
      const filtredFavorite = clusterSelect.includes('favorite')
        ? allFiltred && favorite === true
        : allFiltred;
      // filter + favorite + checked
      if (clusterSelect.some(el => ['checked', 'unchecked'].includes(el))) {
        return clusterSelect.includes('checked')
          ? filtredFavorite && checked === true
          : filtredFavorite && checked === false;
      }
      return filtredFavorite;
    })
    .sort(
      sortByDate
        ? (a, b) => b.createdAt - a.createdAt
        : (a, b) => a.title.localeCompare(b.title),
    );

  // group filter
  const filtredGroups = Array.from(
    new Set(filtredClusters.map(el => el.group)),
  ).sort((a, b) => a.localeCompare(b));

  const selectedGroups =
    clusterSelect.filter(
      el => !['favorite', 'checked', 'unchecked'].includes(el),
    ).length !== 0
      ? clusterSelect.filter(el => filtredGroups.includes(el))
      : filtredGroups;

  return (
    <List>
      {selectedGroups.map(group => (
        <Fragment key={group}>
          <LiGroup group={group} />

          {filtredClusters.map(
            el =>
              el.group === group && (
                <LiCluster
                  key={el._id}
                  el={el}
                  sortByDate={sortByDate}
                  setSortByDate={setSortByDate}
                />
              ),
          )}
        </Fragment>
      ))}
    </List>
  );
};

export default ClusterList;
