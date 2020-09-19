import React from 'react';

import './config/yup';

// import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import GlobalStyles from './styles/global';

const App = () => {
  return (
    <>
      <SignUp />
      <GlobalStyles />
    </>
  );
};

export default App;
