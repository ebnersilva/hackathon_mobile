import React from "react";
import { Platform } from "react-native";
import PropTypes from "prop-types";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";

import { colors } from "~/styles";
import { StyledHeader, ButtonHeader, Title } from "./styles";

const Header = ({
  title,
  fontSize,
  handleBack,
  handleClose,
  backgroundColor,
  textColor,
  buttonColor,
  buttonBackActive,
  buttonCloseActive
}) => (
  <StyledHeader
    buttonBackActive={buttonBackActive}
    buttonCloseActive={buttonCloseActive}
    backgroundColor={backgroundColor}
  >
    {buttonBackActive && (
      <ButtonHeader buttonSide="left" onPress={() => handleBack()}>
        <IconFontAwesome
          size={38}
          name="arrow-circle-left"
          color={buttonColor}
          style={{ marginLeft: 10 }}
        />
      </ButtonHeader>
    )}
    <Title textColor={textColor} fontSize={fontSize}>
      {title}
    </Title>
    {buttonCloseActive && (
      <ButtonHeader buttonSide="right" onPress={() => handleClose()}>
        <IconFontAwesome
          size={38}
          name="times-circle-o"
          color={buttonColor}
          style={{ marginRight: 10 }}
        />
      </ButtonHeader>
    )}
  </StyledHeader>
);

Header.defaultProps = {
  fontSize: Platform.OS === "ios" ? 32 : 24,
  backgroundColor: "#02B6C1;",
  textColor: colors.white,
  buttonColor: colors.white,
  buttonBackActive: true,
  buttonCloseActive: true,
  handleBack: () => {},
  handleClose: () => {}
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
  handleBack: PropTypes.func,
  handleClose: PropTypes.func,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  buttonColor: PropTypes.string,
  buttonBackActive: PropTypes.bool,
  buttonCloseActive: PropTypes.bool
};

export default Header;
