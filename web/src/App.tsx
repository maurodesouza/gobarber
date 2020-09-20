import React from 'react';

import './config/yup';

import { AuthProvider } from './hooks/AuthContext';

import ToastContainer from './components/ToastContainer';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import GlobalStyles from './styles/global';

const App = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>

      <ToastContainer />
      <GlobalStyles />
    </>
  );
};

export default App;
