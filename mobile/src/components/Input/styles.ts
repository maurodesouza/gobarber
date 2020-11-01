import styled, { css } from 'styled-components/native';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  background: #232129;
  margin-bottom: 8px;
  padding: 0 16px;
  border-width: 2px;
  border-color: #232129;

  flex-direction: row;
  align-items: center;

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #ff9000;
    `}
`;

export const Input = styled.TextInput`
  font-family: RobotoSlab_400Regular;
  color: #fff;
  font-size: 16px;
  flex: 1;
  margin-left: 16px;
`;
