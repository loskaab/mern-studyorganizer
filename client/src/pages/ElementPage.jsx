import ElementList from 'components/ElementList/ElementList';
import FlexWrap from 'components/shared/FlexWrap/FlexWrap';
import { themes } from 'styles/themes';

const { s, m } = themes.indents;

const ElementPage = () => {
  return (
    <FlexWrap $p={`2px ${m} ${s} ${s}`}>
      <ElementList />
    </FlexWrap>
  );
};

export default ElementPage;
