import React from 'react';
import { useTransition } from 'react-spring';

import { ToastData } from '../../hooks/toast';
import Toast from './Toast';

import * as S from './styles';

interface ToastContainerProps {
  toasts: ToastData[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ toasts }) => {
  const toastsWithTransition = useTransition(toasts, toast => toast.id, {
    from: { right: '-120%', opacity: 0 },
    enter: { right: '0%', opacity: 1 },
    leave: { right: '-120%', opacity: 0 },
  });

  return (
    <S.Container>
      {toastsWithTransition.map(({ item, key, props }) => (
        <Toast key={key} options={item} style={props} />
      ))}
    </S.Container>
  );
};

export default ToastContainer;
