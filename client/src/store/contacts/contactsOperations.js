import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from 'servises/contactApi';

export const fetchContactsThunk = createAsyncThunk(
  'items/fetchContacts',
  async (_, thunkAPI) => {
    try {
      return await API.fetchContacts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'items/addContact',
  async (contact, thunkAPI) => {
    try {
      return await API.addContact(contact);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateContactThunk = createAsyncThunk(
  'items/updateContact',
  async (contact, thunkAPI) => {
    try {
      return await API.updateContact(contact);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'items/deleteContact',
  async (id, thunkAPI) => {
    try {
      return await API.deleteContact(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
