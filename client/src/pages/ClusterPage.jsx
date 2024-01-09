import { themes } from 'styles/themes';
import FlexWrap from 'components/shared/FlexWrap/FlexWrap';
import ClusterList from 'components/ClusterList/ClusterList';
import ClusterEditBar from 'components/ClusterBars/ClusterEditBar';

const { s, m } = themes.indents;

const ClusterPage = () => {
  return (
    <FlexWrap $p={`0 ${m} ${s} ${s}`}>
      <ClusterList />
      <ClusterEditBar />
    </FlexWrap>
  );
};

export default ClusterPage;
