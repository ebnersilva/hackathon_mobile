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

export const StyledTextButton = styled.Text`
  font-size: 18px;
  color: #FFF;
  width: 100%;
  text-align: center;
`;
