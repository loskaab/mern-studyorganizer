import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { authReducer } from './auth/authSlice';
import { clustersReducer } from './cluster/clusterSlice';
import { elementsReducer } from './element/elementSlice';

// ----------------persistReducer---------------- //

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user'],
};

const eclustersPersistConfig = {
  key: 'clusters',
  storage,
  whitelist: ['filter', 'activeItem'],
};

const elementsPersistConfig = {
  key: 'elements',
  storage,
  whitelist: ['filter', 'activeItem'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  clusters: persistReducer(eclustersPersistConfig, clustersReducer),
  elements: persistReducer(elementsPersistConfig, elementsReducer),
});

// ----------------configureStore---------------- //

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// -----------------persistStore----------------- //

export const persistor = persistStore(store);
