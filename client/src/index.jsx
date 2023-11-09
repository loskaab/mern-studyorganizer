import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from 'components/App.jsx';
import './styles/GlobalStyle.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/mern_starter/">
    <App />
  </BrowserRouter>,
);
