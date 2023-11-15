import Container from 'components/shared/Container/Container';
import MainLayout from 'layouts/MainLayout/MainLayout';
import { themes } from 'styles/themes';

const HomePage = () => {
  return (
    <Container $p={`${themes.indent.s} ${themes.indent.m}`} $d="flex" $ai="center" $jc="center">
      <MainLayout />
    </Container>
  );
};

export default HomePage;
