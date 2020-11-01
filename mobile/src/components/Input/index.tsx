import React, {
  useRef,
  useEffect,
  useState,
  useImperativeHandle,
  forwardRef,
  useCallback,
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
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { registerField, fieldName, defaultValue = '', error } = useField(name);

  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });
  const inputElementRef = useRef<TextInput>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputElementRef.current?.focus();
    },
  }));

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputValueRef.current.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  return (
    <S.Container isFocused={isFocused} isErrored={!!error}>
      <Feather
        name={icon}
        size={20}
        color={isFocused || isFilled ? '#FF9000' : '#666360'}
      />
      <S.Input
        ref={inputElementRef}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
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
