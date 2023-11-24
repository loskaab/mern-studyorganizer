import { useSelector } from 'react-redux';

import * as selectors from 'store/elements/elementsSelectors';

export const useElements = () => {
  const allElements = useSelector(selectors.selectElements);
  const elementsGroups = useSelector(selectors.selectElementsGroups);
  const elementsFilter = useSelector(selectors.selectElementsFilter);
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
