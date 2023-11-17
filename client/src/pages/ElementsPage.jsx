import { themes } from 'styles/themes';

import FlexWrap from 'components/shared/FlexWrap/FlexWrap';

const ElementsPage = () => {
  return (
    <FlexWrap
      $p={`${themes.indent.s} ${themes.indent.m}`}
      $d="flex"
      $fd="column"
      $ai="center"
      $jc="center"
    >
      <h1>Elements</h1>
    </FlexWrap>
  );
};

export default ElementsPage;
