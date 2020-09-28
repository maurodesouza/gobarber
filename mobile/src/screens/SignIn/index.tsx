import React from 'react';
import { Image } from 'react-native';

import logoImg from '../../assets/logo.png';

import Button from '../../components/Button';
import Input from '../../components/Input';

import * as S from './styles';

const SignIn: React.FC = () => {
  return (
    <S.Container>
      <Image source={logoImg} />
      <S.Title>Faça o seu logon</S.Title>

      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="password" icon="lock" placeholder="Senha" />

      <Button>Entrar</Button>
    </S.Container>
  );
};

export default SignIn;
