import styled from "styled-components/native";
import { colors } from "~/styles";

export const ContainerAnimation = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.black};
`;

export const TextMessage = styled.Text`
  font-size: 25px;
  font-weight: bold;
  width: 100%;
  max-width: 100%;
  text-align: center;
  color: ${colors.white};
  position: absolute;
  top: 40%;
`;

export const StyledButton = styled.TouchableOpacity`
  width: 240px;
  height: 50px;
  background: #FFF;
  color: #FFF;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  margin-bottom: 200px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledTextButton = styled.Text`
  font-size: 18px;
  color: #000;
  width: 100%;
  text-align: center;
`;
