import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
`;

export const ContainerModal = styled.View`
  display: flex;
  flex: 1;
  background: #15458A;
  align-items: center;
  justify-content: center;
`;

export const ContainerQuestion = styled.View`
  background: #FFF;
  width: 90%;
  height: 90%;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  background: #136CAC;
  color: #FFF;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  margin-bottom: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledText = styled.Text`
  font-size: 18px;
  color: #000;
  width: 100%;
  text-align: center;
`;

export const StyledTextButton = styled.Text`
  font-size: 18px;
  color: #FFF;
  width: 100%;
  text-align: center;
`;

export const StyledViewQuestion = styled.View`
  height: 200px;
  width: 100%;
  display: flex;
`;



