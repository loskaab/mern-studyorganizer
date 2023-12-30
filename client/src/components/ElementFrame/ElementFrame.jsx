import { useLocation } from 'react-router-dom';

import { useClusters } from 'utils/hooks';

import { Iframe } from './ElementFrame.styled';

const ElementFrame = () => {
  const { pathname } = useLocation();
  const { activeCluster } = useClusters();

  const clusterId = pathname.replace('/element/', '');

  const elementLink = activeCluster?.cluster
    .replace('watch?v=', 'embed/')
    .replace('/view', '/preview');

  return (
    <Iframe
      id={clusterId}
      width="100%"
      height={elementLink?.includes('embed/') ? '50%' : '100%'}
      src={`${elementLink}#view=FitH&toolbar=1&page=${5}`}
    ></Iframe>
  );
};

export default ElementFrame;
