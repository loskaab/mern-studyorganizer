import { createSlice, isAnyOf, combineReducers } from '@reduxjs/toolkit';

// fulfilled auth slice
const gdriveSlice = createSlice({
  name: 'files',
  initialState: [],
  reducers: {
    setFiles: (_, action) => action.payload,
  },
});

export const gdriveReducer = combineReducers({
  files: gdriveSlice.reducer,
});

export const { setFiles } = gdriveSlice.actions;

// loading slice
// const gdriveIsLoadingSlice = createSlice({
//   name: 'isLoading',
//   initialState: false,
//   extraReducers: builder => {
//     builder
//       .addMatcher(isAnyOf(...fn('pending')), () => true)
//       .addMatcher(isAnyOf(...fn('fulfilled')), () => false)
//       .addMatcher(isAnyOf(...fn('rejected')), () => false);
//   },
// });

// error slice
// const gdriveErrorSlice = createSlice({
//   name: 'error',
//   initialState: false,
//   extraReducers: builder => {
//     builder
//       .addMatcher(isAnyOf(...fn('pending')), () => false)
//       .addMatcher(isAnyOf(...fn('fulfilled')), () => false)
//       .addMatcher(isAnyOf(...fn('rejected')), (_, action) => action.payload);
//   },
// });
