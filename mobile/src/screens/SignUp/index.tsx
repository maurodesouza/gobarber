import React, { useRef } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  View,
  ScrollView,
  TextInput,
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { FormHandles } from '@unform/core';

import logoImg from '../../assets/logo.png';

import Button from '../../components/Button';
import Input from '../../components/Input';

import * as S from './styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();

  return (
    <>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="position" enabled>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          // contentContainerStyle={{ flex: 1 }}
        >
          <S.Container>
            <Image source={logoImg} />

            <View>
              <S.Title>Crie sua conta</S.Title>
            </View>

            <S.Form ref={formRef} onSubmit={data => console.log(data)}>
              <Input
                name="name"
                icon="user"
                placeholder="Nome"
                autoCapitalize="words"
                returnKeyType="next"
                onSubmitEditing={() => emailInputRef.current?.focus()}
              />

              <Input
                ref={emailInputRef}
                name="email"
                icon="mail"
                placeholder="E-mail"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => passwordInputRef.current?.focus()}
              />

              <Input
                ref={passwordInputRef}
                name="password"
                icon="lock"
                placeholder="Senha"
                returnKeyType="send"
                secureTextEntry
                onSubmitEditing={() => formRef.current?.submitForm()}
              />

              <Button onPress={() => formRef.current?.submitForm()}>
                Criar
              </Button>
            </S.Form>
          </S.Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <S.BackToLogin onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={20} color="#fff" />

        <S.BackToLoginText>Voltar para logon</S.BackToLoginText>
      </S.BackToLogin>
    </>
  );
};

export default SignUp;
