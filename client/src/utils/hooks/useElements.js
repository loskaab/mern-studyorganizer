import { useSelector } from 'react-redux';

import * as selectors from 'store/elements/elementsSelectors';

export const useElements = () => {
  const elements = useSelector(selectors.selectElements);
  const activeElement = useSelector(selectors.selectActiveElement);
  const filterValue = useSelector(selectors.selectFilterValue);

  const error = useSelector(selectors.selectError);
  const isLoading = useSelector(selectors.selectIsLoading);

  return { elements, activeElement, filterValue, error, isLoading };
};
