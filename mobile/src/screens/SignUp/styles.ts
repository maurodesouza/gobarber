import styled from 'styled-components/native';
import { Form as FormUnform } from '@unform/mobile';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

export const Title = styled.Text`
  font-size: 24px;
  margin: 64px 0 24px 0;
  font-family: RobotoSlab_500Medium;
  color: #f4ede8;
`;

export const Form = styled(FormUnform)`
  width: 100%;
`;

export const BackToLogin = styled.TouchableOpacity`
  width: 100%;
  border-top-width: 1px;
  border-color: #232229;
  padding: 16px 0;
  background: #312e38;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const BackToLoginText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: RobotoSlab_400Regular;
  margin-left: 16px;
`;
