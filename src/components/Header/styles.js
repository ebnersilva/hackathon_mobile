import styled from "styled-components/native";
import { metrics } from "~/styles";

export const StyledHeader = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${props => props.backgroundColor};
  height: 50px;

  shadow-color: #000;
  shadow-offset: 0 0;
  shadow-opacity: 0.5;
  shadow-radius: 10;

  elevation: 3;
`;

export const ButtonHeader = styled.TouchableOpacity`
  position: absolute;
  left: ${props => (props.buttonSide === "left" ? "10" : "auto")};
  right: ${props => (props.buttonSide === "right" ? "10" : "auto")};
`;

export const Title = styled.Text`
  font-family: Montserrat-Regular;
  color: ${props => props.textColor};
  font-size: ${props => props.fontSize}px;
`;
