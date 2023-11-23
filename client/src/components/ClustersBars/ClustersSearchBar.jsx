import GridWrap from 'components/shared/GridWrap/GridWrap';
import Select from 'components/shared/Select/Select';
import Filter from 'components/shared/Filter/Filter';
import { selectClustersFilter } from 'store/clusters/clustersSelectors';
import { setClustersFilter } from 'store/clusters/clustersSlice';
import { themes } from 'styles/themes';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const { white: b, borderLight: bh, backgroundHoverd: bg } = themes.colors;

const ClustersSearchBar = () => {
  return (
    <GridWrap $w="55%" $cg="20px" $ai="center" $gtc="2fr 1fr">
      <Filter selector={selectClustersFilter} reducer={setClustersFilter} />
      <Select options={options} $b={b} $bh={bh} $bg={bg} />
    </GridWrap>
  );
};

export default ClustersSearchBar;
