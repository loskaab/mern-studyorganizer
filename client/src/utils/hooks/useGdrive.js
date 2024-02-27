import { useSelector } from 'react-redux';

import * as selectors from 'store/gdrive/gdriveSelectors';

export const useGdrive = () => {
  const gdriveFiles = useSelector(selectors.selectGdriveFiles);
  const activeFile = useSelector(selectors.selectActiveFile);
  const gdriveFolders = useSelector(selectors.selectGdriveFolders);
  const gdriveFilter = useSelector(selectors.selectGdriveFilter);
  const gdriveSelect = useSelector(selectors.selectGdriveSelect);
  const gdriveTrash = useSelector(selectors.selectGdriveTrash);

  const isLoading = useSelector(selectors.selectIsLoading);
  const error = useSelector(selectors.selectError);

  return {
    gdriveFiles,
    activeFile,
    gdriveFolders,
    gdriveFilter,
    gdriveSelect,
    gdriveTrash,

    isLoading,
    error,
  };
};
