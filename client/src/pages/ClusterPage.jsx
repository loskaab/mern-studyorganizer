import { themes } from 'styles/themes';
import FlexWrap from 'components/shared/FlexWrap/FlexWrap';
import ClusterList from 'components/ClusterList/ClusterList';
import ClusterEditBar from 'components/ClusterBars/ClusterEditBar';

const ClusterPage = () => {
  const { s, m } = themes.indents;

  return (
    <FlexWrap $p={`2px ${m} ${s}`}>
      <ClusterList />
      <ClusterEditBar />
    </FlexWrap>
  );
};

export default ClusterPage;
