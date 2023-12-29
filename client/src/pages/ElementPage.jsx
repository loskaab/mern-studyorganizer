// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

import { useClusters } from 'utils/hooks';
// import { fetchElementsThunk } from 'store/element/elementThunks';
import { themes } from 'styles/themes';
import FlexWrap from 'components/shared/FlexWrap/FlexWrap';

const ElementPage = () => {
  // const dispatch = useDispatch();
  const { activeCluster } = useClusters();
  const { s, m } = themes.indents;
  const { group, title } = activeCluster;

  // useEffect(() => {
  //   dispatch(fetchElementsThunk());
  // }, [dispatch]);

  return (
    <FlexWrap $p={`${s} ${m}`} $fd="column" $ai="center" $jc="center">
      <h1>{title}</h1>
      <h2>({group})</h2>
    </FlexWrap>
  );
};

export default ElementPage;
