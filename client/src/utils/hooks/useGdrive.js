import { useSelector } from 'react-redux';

import * as selectors from 'store/gdrive/gdriveSelectors';

export const useGdrive = () => {
  const files = useSelector(selectors.selectFiles);
  const activeFile = useSelector(selectors.selectActiveFile);

  return {
    files,
    activeFile,
  };
};
