import { useLocation } from 'react-router-dom';

import { useClusters } from 'utils/hooks';

import { Iframe } from './ElementFrame.styled';

const ElementFrame = () => {
  const { pathname } = useLocation();
  const { activeCluster } = useClusters();

  const clusterId = pathname.replace('/element/', '');

  let elementLink = activeCluster?.cluster
    // video
    .replace('watch?v=', 'embed/')
    // pdf
    .replace('/view', '/preview')
    // file list
    .replace('drive/folders/', 'embeddedfolderview?id=')
    .replace('?usp=drive_link', '#list');

  return (
    <Iframe
      id={clusterId}
      width="100%"
      height={elementLink?.includes('embed/') ? '50%' : '100%'}
      src={`${elementLink}#view=FitH&toolbar=1&page=${1}`}
    ></Iframe>

    // <audio controls>
    //   <source src={`${elementLink}`} type="audio/mp3" />
    // </audio>
  );
};

export default ElementFrame;
