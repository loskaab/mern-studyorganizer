import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import { GlobalStyle } from 'styles/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyle />
    <BrowserRouter basename="/mern_starter/">
      <App />
    </BrowserRouter>
    ,
  </>,
);
