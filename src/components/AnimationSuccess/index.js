import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Lottie from "lottie-react-native";

import animation_success from "./animation_success.json";
import animation_success_1 from "./animation_success_1.json";
import { TextMessage, ContainerAnimation, StyledButton, StyledTextButton } from "./styles";

export default function AnimationSuccess({ message, hideModal, showModalContent}) {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowAnimation(false);
    }, 1500);
  }, []);
  return (
    <ContainerAnimation>
      <TextMessage>{message}</TextMessage>
      {showAnimation && (
        <Lottie
          style={{
            width: 300,
            position: "absolute",
            top: "35%"
          }}
          autoSize
          redizeMode="contain"
          source={animation_success}
          autoPlay
          loop
        />
      )}
      <Lottie
        style={{
          width: "100%",
          height: "100%"
        }}
        autoSize
        redizeMode="contain"
        source={animation_success_1}
        autoPlay
        loop
      />
      <StyledButton onPress={() => {
        showModalContent()
        hideModal()
      }} >
        <StyledTextButton>Capturar Conteúdo</StyledTextButton>
      </StyledButton>
    </ContainerAnimation>
  );
}

AnimationSuccess.propTypes = {
  message: PropTypes.string.isRequired
};
