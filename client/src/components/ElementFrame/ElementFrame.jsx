import { useLocation } from 'react-router-dom';

import { getMediaLink } from 'utils/helpers';
import { useClusters, useGdrive } from 'utils/hooks';

import { Iframe } from './ElementFrame.styled';

const ElementFrame = () => {
  const { pathname } = useLocation();
  const { activeCluster } = useClusters();
  const { activeFile } = useGdrive();

  const elementLink = getMediaLink(
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
      />
    )
  );
};

export default ElementFrame;

// <audio controls>
//   <source src={`${elementLink}`} type="audio/mp3" />
// </audio>
