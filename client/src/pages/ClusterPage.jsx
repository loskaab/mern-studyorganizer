import Button from 'components/shared/Button/Button';
import Container from 'components/shared/Container/Container';
import ControlBar from 'components/shared/ControlBar/ControlBar';
import { themes } from 'styles/themes';

const ClusterPage = () => {
  return (
    <Container
      $p={`${themes.indent.s} ${themes.indent.m}`}
      $d="flex"
      $fd="column"
      $ai="center"
      $jc="center"
    >
      <h1>Cluster</h1>
      <ControlBar $x="right" $y="bottom" $gtc="1fr 1fr">
        <Button $s="m">Edit</Button>
        <Button $s="m">Add</Button>
      </ControlBar>
    </Container>
  );
};

export default ClusterPage;
