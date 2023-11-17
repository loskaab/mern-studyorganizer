import FlexWrap from 'components/shared/FlexWrap/FlexWrap';
import MainLayout from 'layouts/MainLayout/MainLayout';
import { themes } from 'styles/themes';

const HomePage = () => {
  return (
    <FlexWrap
      $p={`${themes.indent.s} ${themes.indent.m}`}
      $d="flex"
      $ai="center"
      $jc="center"
    >
      <MainLayout />
    </FlexWrap>
  );
};

export default HomePage;
