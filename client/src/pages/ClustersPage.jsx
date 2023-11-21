import { themes } from 'styles/themes';

import FlexWrap from 'components/shared/FlexWrap/FlexWrap';
import ClustersList from 'components/ClustersList/ClustersList';
import ClustersBar from 'components/ClustersBar/ClustersBar';

const ClustersPage = () => {
  return (
    <FlexWrap $p={`${themes.indent.s} ${themes.indent.m}`}>
      <ClustersList />
      <ClustersBar />
    </FlexWrap>
  );
};

export default ClustersPage;
