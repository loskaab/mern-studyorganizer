import { themes } from 'styles/themes';

import FlexWrap from 'components/shared/FlexWrap/FlexWrap';
import ClustersList from 'components/ClustersList/ClustersList';
import ClustersEditBar from 'components/ClustersBars/ClustersEditBar';

const ClustersPage = () => {
  const { s, m } = themes.indents;

  return (
    <FlexWrap $p={`2px ${m} ${s}`}>
      <ClustersList />
      <ClustersEditBar />
    </FlexWrap>
  );
};

export default ClustersPage;
