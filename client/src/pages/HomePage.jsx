import FlexWrap from 'components/shared/FlexWrap/FlexWrap';
import MainLayout from 'layouts/MainLayout/MainLayout';
import { themes } from 'styles/themes';

const HomePage = () => {
  const { s, m } = themes.indent;

  return (
    <FlexWrap $p={`${s} ${m}`} $d="flex" $ai="center" $jc="center">
      <MainLayout />
    </FlexWrap>
  );
};

export default HomePage;
