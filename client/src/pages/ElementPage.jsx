import ElementList from 'components/ElementList/ElementList';
import ElementEditBar from 'components/ElemetnBars/ElementEditBar';
import FlexWrap from 'components/shared/FlexWrap/FlexWrap';
import { themes } from 'styles/themes';

const { s, m } = themes.indents;

const ElementPage = () => {
  return (
    <FlexWrap $p={`2px ${m} ${s} ${s}`}>
      <ElementList />
      <ElementEditBar />
    </FlexWrap>
  );
};

export default ElementPage;
