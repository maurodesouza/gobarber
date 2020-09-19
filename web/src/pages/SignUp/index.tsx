import React, { useCallback } from 'react';

import { FiLock, FiMail, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';

import * as Yup from 'yup';

import Button from '../../components/Button';
import Input from '../../components/Input';

import logo from '../../assets/logo.svg';
import * as S from './styles';

const SignUp: React.FC = () => {
  const handleSubmit = useCallback(async (data: Record<string, unknown>) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email().required().label('e-mail'),
        password: Yup.string().min(6),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <S.Container>
      <S.Background />

      <S.Content>
        <img src={logo} alt="GoBarber" />

        <Form onSubmit={handleSubmit}>
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

        <a href="fotgot">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </S.Content>
    </S.Container>
  );
};

export default SignUp;
