import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
  type?: 'success' | 'error' | 'info';
}

const toastTypeVariations = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  position: relative;
  width: 360px;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: grid;

  grid-template-columns: 24px 1fr 18px;
  grid-template-rows: 24px 1fr;
  grid-template-areas: 'icon title button' '. text .';

  ${props => toastTypeVariations[props.type || 'info']}

  & + & {
    margin-top: 8px;
  }

  > svg {
    grid-area: icon;
  }

  strong {
    padding: 0 6px 0 12px;
    grid-area: title;
    align-self: center;
  }

  p {
    padding: 0 6px 0 12px;
    grid-area: text;
    font-size: 14px;
    margin-top: 4px;
  }

  button {
    grid-area: button;
    border: 0;
    background: transparent;
    color: inherit;
    height: 18px;
    align-self: center;

    & * {
      cursor: pointer;
    }
  }
`;
