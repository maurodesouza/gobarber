import React from 'react';
import { Image } from 'react-native';

import logoImg from '../../assets/logo.png';

import * as S from './styles';

const SignIn: React.FC = () => {
  return (
    <S.Container>
      <Image source={logoImg} />
    </S.Container>
  );
};

export default SignIn;
