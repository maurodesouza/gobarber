import React, {
  useRef,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from 'react';

import { TextInputProps, TextInput } from 'react-native';
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

interface InputRef {
  focus: () => void;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  { icon, name, ...rest },
  ref,
) => {
  const { registerField, fieldName, defaultValue = '' } = useField(name);

  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });
  const inputElementRef = useRef<TextInput>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputElementRef.current?.focus();
    },
  }));

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
        ref={inputElementRef}
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

export default forwardRef(Input);
