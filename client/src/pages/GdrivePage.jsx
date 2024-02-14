import { useState } from 'react';

import FlexWrap from 'components/shared/FlexWrap/FlexWrap';
import GdriveList from 'components/GdriveList/GdriveList';
import GdriveEditBar from 'components/GdriveBars/GdriveEditBar';

import { themes } from 'styles/themes';

const { s, m } = themes.indents;

const GdrivePage = () => {
  const [tokenClient, setTokenClient] = useState({});
  return (
    <FlexWrap $p={`0 ${m} ${s} ${s}`}>
      <GdriveList setTokenClient={setTokenClient} />
      <GdriveEditBar tokenClient={tokenClient} />
    </FlexWrap>
  );
};

export default GdrivePage;
