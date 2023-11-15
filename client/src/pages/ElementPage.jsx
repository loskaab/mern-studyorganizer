import Container from 'components/shared/Container/Container';
import { themes } from 'styles/themes';

const ElementPage = () => {
  return (
    <Container
      $p={`${themes.indent.s} ${themes.indent.m}`}
      $d="flex"
      $fd="column"
      $ai="center"
      $jc="center"
    >
      <h1>Element</h1>
    </Container>
  );
};

export default ElementPage;
