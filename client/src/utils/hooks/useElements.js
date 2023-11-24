import { useSelector } from 'react-redux';

import * as selectors from 'store/element/elementSelectors';

export const useElements = () => {
  const allElements = useSelector(selectors.selectElements);
  const elementsGroups = useSelector(selectors.selectElementGroups);
  const elementsFilter = useSelector(selectors.selectElementFilter);
  const activeElement = useSelector(selectors.selectActiveElement);

  const error = useSelector(selectors.selectError);
  const isLoading = useSelector(selectors.selectIsLoading);

  return {
    allElements,
    elementsGroups,
    elementsFilter,
    activeElement,
    error,
    isLoading,
  };
};
