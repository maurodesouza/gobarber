import styled from 'styled-components';

export const Container = styled.div`
  background: #232129;
  color: #666360;
  border-radius: 10px;
  border: 2px solid #232129;
  width: 100%;

  display: flex;
  align-items: center;
  padding: 16px;

  & + div {
    margin-top: 8px;
  }

  input {
    color: #f4ede8;
    background: transparent;
    border: 0;
    flex: 1;

    &::placeholder {
      color: #666360;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      box-shadow: 0 0 0 30px transparent inset !important;
      transition: background-color 5000s ease-in-out 0s;
      -webkit-text-fill-color: #f4ede8 !important;
    }
  }

  > svg {
    margin-right: 16px;
  }
`;
