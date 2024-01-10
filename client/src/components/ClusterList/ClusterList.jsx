import { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  fetchClustersThunk,
  fetchGroupsThunk,
} from 'store/cluster/clusterThunks';
import { useClusters, useElements } from 'utils/hooks';
import { fetchElementsThunk } from 'store/element/elementThunks';

import LiGroup from './Li/LiGroup';
import LiCluster from './Li/LiCluster';
import { List } from './ClusterList.styled';

const ClusterList = () => {
  const dispatch = useDispatch();
  const { allClusters, clusterTrash } = useClusters();
  const { clusterFilter, clusterSelect = [] } = useClusters();
  const { allElements } = useElements();

  const [sortByDate, setSortByDate] = useState(true);

  useEffect(() => {
    dispatch(fetchClustersThunk());
    dispatch(fetchGroupsThunk());
    dispatch(fetchElementsThunk());
  }, [dispatch]);

  // clusters filter+selector (trash/filter/favorite/checked)
  const getClusters = () => {
    // trash
    const trashId = clusterTrash.map(el => el._id);
    const trashClusters = allClusters.filter(el => trashId.includes(el._id));
    if (clusterSelect.includes('trash')) return trashClusters;
    //recent
    const sortedElements = [...allElements].sort((a, b) =>
      a.createdAt.localeCompare(b.createdAt),
    );
    let recent = [];
    for (let i = 0; i < sortedElements.length; i += 1) {
      const cluster = sortedElements[i].cluster;
      if (!recent.includes(cluster)) {
        recent.push(cluster);
      }
    }
    const recentClusters = allClusters
      .filter(el => recent.includes(el.cluster))
      .slice(0, 29);

    if (clusterSelect.includes('recent')) return recentClusters;
    // all
    return allClusters;
  };

  const filtredClusters = getClusters()
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

  // groups filter+selector
  const clusterGroups = Array.from(
    new Set(filtredClusters.map(el => el.group)),
  ).sort((a, b) => a.localeCompare(b));

  let selectedGroups = clusterSelect.filter(el => clusterGroups.includes(el));
  selectedGroups = selectedGroups.length !== 0 ? selectedGroups : clusterGroups;

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
