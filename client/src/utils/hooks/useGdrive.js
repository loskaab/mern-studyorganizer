import { useSelector } from 'react-redux';

import * as selectors from 'store/gdrive/gdriveSelectors';

export const useGdrive = () => {
  const files = useSelector(selectors.selectFiles);
  const activeFile = useSelector(selectors.selectActiveFile);
  const gdriveFilter = useSelector(selectors.selectGdriveFilter);
  const gdriveSelect = useSelector(selectors.selectGdriveSelect);
  const gdriveCheck = useSelector(selectors.selectGdriveCheck);
  const gdriveTrash = useSelector(selectors.selectGdriveTrash);

  const isLoading = useSelector(selectors.selectIsLoading);
  const error = useSelector(selectors.selectError);

  return {
    files,
    activeFile,
    gdriveFilter,
    gdriveSelect,
    gdriveCheck,
    gdriveTrash,

    isLoading,
    error,
  };
};
