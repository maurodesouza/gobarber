import React, { useRef, useEffect } from 'react';
import { TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { useField } from '@unform/core';

import * as S from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

interface InputValueReference {
  value: string;
}

const Input: React.FC<InputProps> = ({ icon, name, ...rest }) => {
  const { registerField, fieldName, defaultValue = '' } = useField(name);

  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  return (
    <S.Container>
      <Feather name={icon} size={20} color="#666360" />
      <S.Input
        keyboardAppearance="dark"
        defaultValue={defaultValue}
        placeholderTextColor="#666360"
        onChangeText={text => {
          inputValueRef.current.value = text;
        }}
        {...rest}
      />
    </S.Container>
  );
};

export default Input;
