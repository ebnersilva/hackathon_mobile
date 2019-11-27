import styled from "styled-components";
import colors from "./colors";
import metrics from "./metrics";

const Back = styled.TouchableOpacity`
  position: absolute;
  top: ${metrics.baseMarginTop};
  left: 20px;
`;

export { colors, metrics, Back };
