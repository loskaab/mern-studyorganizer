import { useSelector } from 'react-redux';
import * as selectors from 'store/seletors';

export const useContacts = () => {
  const contacts = useSelector(selectors.selectContacts);
  const activeContact = useSelector(selectors.selectActiveContact);
  const filterValue = useSelector(selectors.selectFilterValue);

  const error = useSelector(selectors.selectError);
  const isLoading = useSelector(selectors.selectIsLoading);

  return { contacts, activeContact, filterValue, error, isLoading };
};
