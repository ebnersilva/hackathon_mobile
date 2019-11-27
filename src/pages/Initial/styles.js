import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  background: #15458A;
  align-items: center;
  justify-content: center;
`;

export const ContainerButtons = styled.View`
  height: 180px;
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledButton = styled.TouchableOpacity`
  height: 65px;
  width: 170px;
  border-radius: 8px;
  background: ${props => props.color};
  color: #FFF;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledText = styled.Text`
  font-size: 13px;
  color: ${props => props.color};
  text-align: center;
`;
