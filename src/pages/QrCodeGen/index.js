import React from 'react';
import { useSelector } from "react-redux";
import QRCode from 'react-native-qrcode-svg';
import Header from "~/components/Header";
import NavigationService from "~/services/navigation";

import { Container, CardQrCode } from "./styles";

export default function QrCodeGen() {
  const activity_id = useSelector(state => state.saveActivity.data.id);
  return (
    <>
      <Header
        handleBack={() => NavigationService.navigate('Places')}
        buttonCloseActive={false}
        title="QRCode"
        fontSize={24}
      />
      <Container>
        <CardQrCode>
          <QRCode
            value={activity_id.toString()}
            size={200}
          />
        </CardQrCode>
      </Container>
    </>
  );
}
