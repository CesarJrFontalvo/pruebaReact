import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routes/AppRouter';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/store';


import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <AppRouter />
</Provider>,
//  document.getElementById('root')
);

