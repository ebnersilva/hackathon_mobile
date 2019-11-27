import React from "react";
import { Modal, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { RNCamera } from "react-native-camera";

import { Container } from "./styles";

import Header from "~/components/Header";

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    height: "100%",
    width: "100%"
  }
});

export default function QrCodeScanner({ getBarCode }) {
  function handleOnBarCodeRead(barcode) {
    getBarCode(barcode);
  }

  return (
    <Container>
      <Header
        buttonBackActive={false}
        buttonCloseActive={false}
        title="Escanear QRCode"
        fontSize={24}
        backgroundColor="#FFF"
        textColor="#000"
      />
      <RNCamera
        style={styles.preview}
        type="back"
        autoFocus={RNCamera.Constants.AutoFocus.on}
        flashMode={RNCamera.Constants.FlashMode.off}
        captureAudio={false}
        onBarCodeRead={barcode => handleOnBarCodeRead(barcode)}
      />
    </Container>
  );
}

QrCodeScanner.propTypes = {
  getBarCode: PropTypes.func.isRequired
};
