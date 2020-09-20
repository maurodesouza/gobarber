import React from 'react';

import './config/yup';

import AuthContext from './context/AuthContext';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import GlobalStyles from './styles/global';

const App = () => {
  return (
    <>
      <AuthContext.Provider value={{ name: 'Junior' }}>
        <SignIn />
      </AuthContext.Provider>
      <GlobalStyles />
    </>
  );
};

export default App;
