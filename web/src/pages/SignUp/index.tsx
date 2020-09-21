import React, { useCallback, useRef, useState } from 'react';

import { FiLock, FiMail, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import * as Yup from 'yup';

import { useToast } from '../../hooks/toast';

import Button from '../../components/Button';
import Input from '../../components/Input';

import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';

import logo from '../../assets/logo.svg';
import * as S from './styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [loading, setLoading] = useState(false);

  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: Record<string, unknown>) => {
      try {
        formRef.current?.setErrors({});
        setLoading(true);

        const schema = Yup.object().shape({
          name: Yup.string().required().label('Nome'),
          email: Yup.string().email().required().label('E-mail'),
          password: Yup.string().min(6),
        });

        await schema.validate(data, { abortEarly: false });

        await api.post('/users', data);

        history.push('/');

        addToast({
          type: 'success',
          title: 'Cadastro realizado',
          message: 'Você já pode fazer logon no GoBarber!',
        });
      } catch (err) {
        setLoading(false);

        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        formRef.current?.reset();

        formRef.current?.getFieldRef('email').focus();
        formRef.current?.getFieldRef('name').focus();

        addToast({
          type: 'error',
          title: 'Ocorreu um erro!',
          message: err.response.data.message,
        });
      }
    },
    [addToast, history],
  );

  return (
    <S.Container>
      <S.Background />

      <S.Content>
        <S.AnimationContainer>
          <img src={logo} alt="GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>

            <Input icon={FiUser} name="name" placeholder="Nome" />
            <Input icon={FiMail} name="email" placeholder="E-mail" />
            <Input
              icon={FiLock}
              name="password"
              type="password"
              placeholder="Senha"
            />

            <Button disabled={loading} type="submit">
              {loading ? 'Cadastrando ...' : 'Cadastrar'}
            </Button>
          </Form>

          <Link to="/">
            <FiArrowLeft />
            Voltar para logon
          </Link>
        </S.AnimationContainer>
      </S.Content>
    </S.Container>
  );
};

export default SignUp;
