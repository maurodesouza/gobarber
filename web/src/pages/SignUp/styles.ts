import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signUpBackground from '../../assets/sign-up-background.png';

const appearFromRight = keyframes`
  from {
    transform: translateX(50px);
    opacity: 0;
  } to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;
  padding: 30px 16px;
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  animation: ${appearFromRight} 1s;

  form {
    margin: 80px 0;
    max-width: 340px;
    width: 100%;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      margin-top: 24px;
      display: block;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    color: #f4ede8;
    display: flex;
    align-items: center;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }

    svg {
      margin-right: 8px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackground}) no-repeat center;
  background-size: cover;
`;
