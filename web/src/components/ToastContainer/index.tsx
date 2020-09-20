import React from 'react';

import { ToastData } from '../../hooks/toast';
import Toast from './Toast';

import * as S from './styles';

interface ToastContainerProps {
  toasts: ToastData[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ toasts }) => {
  return (
    <S.Container>
      {toasts.map(toast => (
        <Toast key={toast.id} options={toast} />
      ))}
    </S.Container>
  );
};

export default ToastContainer;
