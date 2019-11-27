import styled from 'styled-components/native';
import { Picker } from "react-native";

export const Container = styled.View`
  display: flex;
  flex: 1;
  background: #15458A;
  align-items: center;
  justify-content: center;
`;

export const StyledText = styled.Text`
  font-size: 18px;
  color: #FFF;
`;

export const StyledButtonRegister = styled.TouchableOpacity`
  background: transparent;
`;

export const StyledTextRegister = styled.Text`
  font-size: 14px;
  margin-top: 15px;
  color: #FFF;
`;

export const StyledInputText = styled.TextInput`
  display: flex;
  height: 49px;
  width: 240px;
  border-radius: 8px;
  color: #000;
  background: #FFF;
  margin-bottom: 10px;
`;

export const StyledButton = styled.TouchableOpacity`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 50px;
  background: #136CAC;

  shadow-color: #000;
  shadow-offset: 0 0;
  shadow-opacity: 0.5;
  shadow-radius: 10;

  elevation: 3;
  border-radius: 10px;
`;

export const StyledPicker = styled(Picker)`
  display: flex;
  height: 49px;
  width: 240px;
  border-radius: 8px;
  color: #000;
  background: #FFF;
  margin-bottom: 10px;
`;
