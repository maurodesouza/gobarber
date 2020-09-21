import React, { createContext, useCallback, useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

import ToastContainer from '../components/ToastContainer';

export interface ToastData {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  message?: string;
  time?: number;
}

type ToastOptions = Omit<ToastData, 'id'>;

interface ToastContextData {
  addToast: (options: ToastOptions) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const addToast = useCallback(
    ({ type, title, message, time }: ToastOptions) => {
      const id = uuid();

      const toast = {
        id,
        type,
        title,
        message,
        time,
      };

      setToasts(state => [toast, ...state]);
    },
    [],
  );

  const removeToast = useCallback((id: string) => {
    setToasts(state => state.filter(toast => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} />
    </ToastContext.Provider>
  );
};

const useToast = (): ToastContextData => {
  const context = useContext(ToastContext);

  if (!context) throw new Error('useToast must be used within a ToastProvider');

  return context;
};

export { ToastProvider, useToast };
