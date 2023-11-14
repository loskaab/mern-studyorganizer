import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from 'store/store';
import { GlobalStyle } from 'styles/GlobalStyle';

import App from './App.jsx';

const { BASE_URL } = import.meta.env;

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyle />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename={BASE_URL}>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </>,
);
