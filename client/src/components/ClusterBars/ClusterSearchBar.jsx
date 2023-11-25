import { useState } from 'react';

import GridWrap from 'components/shared/GridWrap/GridWrap';
import Select from 'components/shared/Select/Select';
import Filter from 'components/shared/Filter/Filter';
import { useClusters } from 'utils/hooks';
import { selectClusterFilter } from 'store/cluster/clusterSelectors';
import { setClusterFilter } from 'store/cluster/clusterSlice';
import { themes } from 'styles/themes';

const { backgroundHoverd: ol, white: b, borderLight: bh } = themes.colors;

const ClustersSearchBar = () => {
  const [group, setGroup] = useState('');

  const { clusterGroups } = useClusters();

  const options = clusterGroups.map(({ clusterGroup }) => {
    return { value: clusterGroup, label: clusterGroup };
  });

  const handleChange = data => setGroup({ group: data ? data.value : '' });

  return (
    <GridWrap $w="55%" $cg="20px" $ai="center" $gtc="2fr 1fr">
      <Filter selector={selectClusterFilter} reducer={setClusterFilter} />
      <Select
        onChange={handleChange}
        isClearable={group}
        options={options}
        $ol={ol}
        $b={b}
        $bh={bh}
      />
    </GridWrap>
  );
};

export default ClustersSearchBar;
