import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/GlobalStyle';

import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyle />
    <BrowserRouter basename="/mern_starter/">
      <App />
    </BrowserRouter>
    ,
  </>,
);
