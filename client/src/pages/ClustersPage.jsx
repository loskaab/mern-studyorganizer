import { themes } from 'styles/themes';

import FlexWrap from 'components/shared/FlexWrap/FlexWrap';
import ClustersList from 'components/ClustersList/ClustersList';
import ClustersEditPanel from 'components/EditPanels/ClustersEditPanel';

const ClustersPage = () => {
  const { s, m } = themes.indents;

  return (
    <FlexWrap $p={`2px ${m} ${s}`}>
      <ClustersList />
      <ClustersEditPanel />
    </FlexWrap>
  );
};

export default ClustersPage;
