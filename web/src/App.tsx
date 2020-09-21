import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './config/yup';

import AppProvider from './hooks';

import Routes from './routes';
import GlobalStyles from './styles/global';

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes />
      </AppProvider>

      <GlobalStyles />
    </BrowserRouter>
  );
};

export default App;
