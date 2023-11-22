import { themes } from 'styles/themes';

import FlexWrap from 'components/shared/FlexWrap/FlexWrap';
import ClustersList from 'components/ClustersList/ClustersList';
import ClustersEditPanel from 'layouts/EditPanel/ClustersEditPanel';

const ClustersPage = () => {
  const { s, m } = themes.indents;

  return (
    <FlexWrap $p={`${s} ${m}`}>
      <ClustersList />
      <ClustersEditPanel />
    </FlexWrap>
  );
};

export default ClustersPage;
