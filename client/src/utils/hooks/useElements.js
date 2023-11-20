import { useSelector } from 'react-redux';

import * as selectors from 'store/elements/elementsSelectors';

export const useElements = () => {
  const allElements = useSelector(selectors.selectElements);
  const activeElement = useSelector(selectors.selectActiveElement);
  const filterValue = useSelector(selectors.selectElementsFilter);

  const error = useSelector(selectors.selectError);
  const isLoading = useSelector(selectors.selectIsLoading);

  return { allElements, activeElement, filterValue, error, isLoading };
};
