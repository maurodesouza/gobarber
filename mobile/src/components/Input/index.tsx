import React from 'react';
import { TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';

import * as S from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

const Input: React.FC<InputProps> = ({ icon, ...rest }) => {
  return (
    <S.Container>
      <Feather name={icon} size={20} color="#666360" />
      <S.Input placeholderTextColor="#666360" {...rest} />
    </S.Container>
  );
};

export default Input;
