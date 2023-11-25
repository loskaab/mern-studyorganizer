import { useSelector } from 'react-redux';

import * as selectors from 'store/element/elementSelectors';

export const useElements = () => {
  const allElements = useSelector(selectors.selectElements);
  const elementGroups = useSelector(selectors.selectElementGroups);
  const activeElement = useSelector(selectors.selectActiveElement);
  const elementFilter = useSelector(selectors.selectElementFilter);

  const error = useSelector(selectors.selectError);
  const isLoading = useSelector(selectors.selectIsLoading);

  return {
    allElements,
    elementGroups,
    activeElement,
    elementFilter,
    error,
    isLoading,
  };
};
