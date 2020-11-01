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

interface SignUnFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();

  const handleSubmit = useCallback(async (data: SignUnFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        password: Yup.string().min(6),
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
        'Erro no cadastro',
        'Ocorreu um erro ao fazer o cadastro, cheque as credenciais',
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
              <S.Title>Crie sua conta</S.Title>
            </View>

            <S.Form ref={formRef} onSubmit={handleSubmit}>
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
