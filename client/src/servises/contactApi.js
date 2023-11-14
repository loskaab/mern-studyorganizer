import { apiClient } from './apiClient';

export const fetchContacts = async () => {
  const { data } = await apiClient.get('/contacts');
  return data;
};

export const addContact = async contact => {
  const { data } = await apiClient.post('/contacts', contact);
  return data;
};

export const updateContact = async ({ id, contact }) => {
  const { data } = await apiClient.put(`/contacts/${id}`, contact);
  return data;
};

export const deleteContact = async id => {
  const { data } = await apiClient.delete(`/contacts/${id}`);
  return data;
};
