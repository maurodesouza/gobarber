import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import * as S from './styles';

const Toast: React.FC = () => {
  return (
    <S.Container>
      <S.Toast>
        <FiAlertCircle size={24} />

        <strong>Aconteceu algum erro</strong>

        <p>
          Lorem, ips um do lor s it a met con sect e tur adi pis ici ng el it. I
          us to, qu a e r at qua m. Pers pi ci at is.
        </p>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </S.Toast>

      <S.Toast type="error">
        <FiAlertCircle size={24} />

        <strong>Aconteceu algum erro</strong>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </S.Toast>

      <S.Toast type="success">
        <FiAlertCircle size={24} />

        <strong>Aconteceu algum erro</strong>

        <p>
          Lorem, ips um do lor s it a met con sect e tur adi pis ici ng el it. I
          us to, qu a e r at qua m. Pers pi ci at is.
        </p>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </S.Toast>
    </S.Container>
  );
};

export default Toast;
