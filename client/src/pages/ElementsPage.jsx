import { themes } from 'styles/themes';

import FlexWrap from 'components/shared/FlexWrap/FlexWrap';

const ElementsPage = () => {
  const { s, m } = themes.indent;

  return (
    <FlexWrap $p={`${s} ${m}`} $fd="column" $ai="center" $jc="center">
      <h1>Elements</h1>
    </FlexWrap>
  );
};

export default ElementsPage;
