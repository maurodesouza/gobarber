import React, { createContext, useCallback } from 'react';
import api from '../services/api';

interface SignInData {
  email: string;
  password: string;
}

interface AuthContextData {
  name: string;
  signIn(credentials: SignInData): Promise<void>;
}

const AuthContext = createContext({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }: SignInData) => {
    const response = await api.post('sessions', { email, password });

    console.log(response.data);
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'Junior', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
