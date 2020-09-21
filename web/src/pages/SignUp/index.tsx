import React, { useCallback, useRef } from 'react';

import { FiLock, FiMail, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import * as Yup from 'yup';

import { useToast } from '../../hooks/toast';

import Button from '../../components/Button';
import Input from '../../components/Input';

import getValidationErrors from '../../utils/getValidationErrors';

import logo from '../../assets/logo.svg';
import * as S from './styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: Record<string, unknown>) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required().label('Nome'),
          email: Yup.string().email().required().label('E-mail'),
          password: Yup.string().min(6),
        });

        await schema.validate(data, { abortEarly: false });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Ocorreu um algo!',
          message: 'Essa é apenas uma menssagem',
        });
      }
    },
    [addToast],
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

            <Button type="submit">Cadastrar</Button>
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
