import GridWrap from 'components/shared/GridWrap/GridWrap';
import Select from 'components/shared/Select/Select';
import Filter from 'components/shared/Filter/Filter';
import { useClusters } from 'utils/hooks';
import { selectClustersFilter } from 'store/clusters/clustersSelectors';
import { setClustersFilter } from 'store/clusters/clustersSlice';
import { themes } from 'styles/themes';

const { backgroundHoverd: ol, white: b, borderLight: bh } = themes.colors;

const ClustersSearchBar = () => {
  const { clusterGroups } = useClusters();

  const options = clusterGroups.map(({ clusterGroup }) => {
    return { value: clusterGroup, label: clusterGroup };
  });

  const getGroup = ({ value }) => console.log(value);

  return (
    <GridWrap $w="55%" $cg="20px" $ai="center" $gtc="2fr 1fr">
      <Filter selector={selectClustersFilter} reducer={setClustersFilter} />
      <Select onChange={getGroup} options={options} $ol={ol} $b={b} $bh={bh} />
    </GridWrap>
  );
};

export default ClustersSearchBar;
