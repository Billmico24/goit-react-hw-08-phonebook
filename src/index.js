import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import { Provider } from 'react-redux';
import { store } from '../src/redux/store';

import { ThemeProvider } from '@emotion/react'
import { theme } from "./constants/theme";
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
          </Provider>
        </ThemeProvider>
      </BrowserRouter>
  </React.StrictMode>
);
