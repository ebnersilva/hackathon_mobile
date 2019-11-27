import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import QrCodeScanner from "~/components/QrCodeScanner";
import NavigationService from "~/services/navigation";

import * as SaveUserActivityActions from "~/store/modules/saveUserActivity/actions";

export default function QrCodeScan() {
  const [readQrCode, setReadQrCode] = useState(true);
  const dispatch = useDispatch();

  const user = useSelector(state => state.auth.data[1]);

  function handleGetBarCode(barcode) {
    if (readQrCode) {
      dispatch(SaveUserActivityActions.actionSaveUserActivityRequest({ activity_id: barcode.data, user_id: user.id }));
    }
    setReadQrCode(false);
  }

  return (
    <QrCodeScanner getBarCode={(barcode) => handleGetBarCode(barcode)}/>
  );
}
