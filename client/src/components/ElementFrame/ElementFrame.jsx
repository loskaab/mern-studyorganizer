import { useLocation } from 'react-router-dom';

import { useClusters, useGdrive } from 'utils/hooks';

import { Iframe } from './ElementFrame.styled';

const ElementFrame = () => {
  const { pathname } = useLocation();
  const { activeCluster } = useClusters();
  const { activeFile } = useGdrive();

  const getLink = link =>
    link?.replace('watch?v=', 'embed/').replace('/view', '/preview');
  // .replace('drive/folders/', 'embeddedfolderview?id=');
  // .replace('?usp=drive_link', '#list');
  const elementLink = getLink(
    pathname.includes('gdrive')
      ? activeFile?.webViewLink
      : activeCluster?.cluster,
  );

  return (
    elementLink && (
      <Iframe
        width="100%"
        height={elementLink?.includes('embed/') ? '50%' : '100%'}
        src={`${elementLink}#view=FitH&toolbar=1&page=${1}`}
      ></Iframe>
    )
  );
};

export default ElementFrame;

// <audio controls>
//   <source src={`${elementLink}`} type="audio/mp3" />
// </audio>
