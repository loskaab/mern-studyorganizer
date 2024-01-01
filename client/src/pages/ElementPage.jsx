// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

import FlexWrap from 'components/shared/FlexWrap/FlexWrap';
import { useClusters } from 'utils/hooks';
// import { fetchElementsThunk } from 'store/element/elementThunks';
import { themes } from 'styles/themes';

const { s, m } = themes.indents;

const ElementPage = () => {
  // const dispatch = useDispatch();
  const { activeCluster } = useClusters();

  const { group, title } = activeCluster;

  // useEffect(() => {
  //   dispatch(fetchElementsThunk());
  // }, [dispatch]);

  return (
    <FlexWrap $p={`2px ${m} ${s} ${s}`} $fd="column" $ai="center" $jc="center">
      <h1>{title}</h1>
      <h2>({group})</h2>
    </FlexWrap>
  );
};

export default ElementPage;
