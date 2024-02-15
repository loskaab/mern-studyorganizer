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
import { gdriveReducer } from './gdrive/gdriveSlice';
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
  blacklist: ['isLoading', 'error'],
};

const elementsPersistConfig = {
  key: 'elements',
  storage,
  blacklist: ['isLoading', 'error'],
};

const gdrivePersistConfig = {
  key: 'gdrive',
  storage,
  blacklist: ['isLoading', 'error'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  clusters: persistReducer(eclustersPersistConfig, clustersReducer),
  elements: persistReducer(elementsPersistConfig, elementsReducer),
  gdrive: persistReducer(gdrivePersistConfig, gdriveReducer),
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
