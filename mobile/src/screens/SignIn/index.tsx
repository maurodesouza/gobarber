import React, { useCallback, useRef } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  View,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import logoImg from '../../assets/logo.png';

import Button from '../../components/Button';
import Input from '../../components/Input';

import getValidationErrors from '../../utils/getValidationErrors';

import * as S from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().required(),
      });

      await schema.validate(data, { abortEarly: false });

      // await signIn({
      //   email: data.email,
      //   password: data.password,
      // });

      // history.push('/dashboard');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }

      Alert.alert(
        'Erro na autenticação',
        'Ocorreu um erro ao fazer login, cheque as credenciais',
      );
    }
  }, []);

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
              <S.Title>Faça o seu logon</S.Title>
            </View>

            <S.Form ref={formRef} onSubmit={handleSubmit}>
              <Input
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
                Entrar
              </Button>
            </S.Form>

            <S.ForgotPassword
              onPress={() => {
                //
              }}
            >
              <S.ForgotPasswordText>Esqueci minha senha</S.ForgotPasswordText>
            </S.ForgotPassword>
          </S.Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <S.CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
        <Feather name="log-in" size={20} color="#ff9000" />

        <S.CreateAccountButtonText>Criar conta</S.CreateAccountButtonText>
      </S.CreateAccountButton>
    </>
  );
};

export default SignIn;
