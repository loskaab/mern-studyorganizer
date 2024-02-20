import FlexWrap from 'components/shared/FlexWrap/FlexWrap';
import GdriveList from 'components/GdriveList/GdriveList';
import GdriveEditBar from 'components/GdriveBars/GdriveEditBar';

import { themes } from 'styles/themes';

const { s, m } = themes.indents;

const GdrivePage = () => {
  return (
    <FlexWrap $p={`0 ${m} ${s} ${s}`}>
      <GdriveList />
      <GdriveEditBar />
    </FlexWrap>
  );
};

export default GdrivePage;
