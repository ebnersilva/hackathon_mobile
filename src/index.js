import "./config/ReactotronConfig";
import React from "react";
import { YellowBox } from "react-native";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";


YellowBox.ignoreWarnings([
  "Possible Unhandled Promise Rejection"
]);

export default function Root() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
}
