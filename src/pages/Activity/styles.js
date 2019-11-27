import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #15458A;
`;

export const StyledTextInput = styled.Text`
  font-size: 18px;
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
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
