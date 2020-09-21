import React, { useEffect } from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';

import * as S from './styles';

import { ToastData, useToast } from '../../../hooks/toast';

interface ToastProps {
  options: ToastData;
  style: Record<string, unknown>;
}

const icons = {
  info: <FiInfo size={24} />,
  success: <FiCheckCircle size={24} />,
  error: <FiAlertCircle size={24} />,
};

const Toast: React.FC<ToastProps> = ({ options, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const time = setTimeout(() => {
      removeToast(options.id);
    }, options.time || 3000);

    return () => {
      clearTimeout(time);
    };
  }, [removeToast, options]);

  return (
    <S.Container style={style} type={options.type}>
      {icons[options.type || 'info']}

      <strong>{options.title}</strong>

      {options.message && <p>{options.message}</p>}

      <button type="button" onClick={() => removeToast(options.id)}>
        <FiXCircle size={18} />
      </button>
    </S.Container>
  );
};

export default Toast;
