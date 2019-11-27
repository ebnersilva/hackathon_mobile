import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import LottieView from 'lottie-react-native';
import { check, PERMISSIONS } from "react-native-permissions";
import Geolocation from "@react-native-community/geolocation";
import Header from "~/components/Header";
import { Container, StyledText, StyledButton, StyledButton1 } from "./styles";

import NavigationService from "~/services/navigation";

import * as SavePointsActions from "~/store/modules/savePoints/actions";
import * as MapActions from "~/store/modules/map/actions";

export default function Places() {
  const dispatch = useDispatch();

  const region = useSelector(state => state.map.region);
  const activity_id = useSelector(state => state.saveActivity.data.id);

  /**
   * Método que chama as permissões iniciais se necessário
   */
  async function getInitialPermissions() {
    /**
     * Return of permissions
     * Authorized: Permitted to use this functionality
     * Denied: Not Permitted to use this functionality
     * Restricted: IOS: User not possible to accept this permission: Android: User has selected Never request for me
     * Undetermined: User has not yet been prompted with a permission dialog
     */

    Promise.all([
      check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
      // …
    ]).then((response) => {
      if (response === "undetermined") {
        _requestLocationPermission();
      }
      if (response === "denied") {
        if (Platform.OS === "ios") {
          Linking.openURL("app-settings://");
        } else if (Platform.OS === "android") {
          _requestLocationPermission();
        }
      }

      if (response === "restricted") {
        if (Platform.OS === "android") {
          alert("Para continuar, permita o uso da localização nas configurações do Android!")
        }
      }

      if (response === "authorized") {
        return true;
      }
    }).error(err => {
      console.log("Erro: ", err)
    });
  }

  // Fica ouvindo a posição atual do usuário e atualizando o state
  async function handleWatchPosition() {
    try {
      Geolocation.watchPosition(
        async ({ coords: { latitude, longitude } }) => {
          if (latitude && longitude) {
            dispatch(
              MapActions.actionSetRegionMap({
                latitude,
                longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
              })
            );
          }
        },
        err => {
          if (__DEV__) {
            console.tron.log(err);
          }
        },
        {
          enableHighAccuracy: true,
          distanceFilter: 15,
          interval: 10000,
          fastestInterval: 5000,
          showLocationDialog: true,
          forceRequestLocation: false
        }
      );
    } catch (err) {
      // Deu erro
    }
  }

  // Pega a localização atual do usuário (Utilizado quando o componente é renderizado)
  function handleGetPosition() {
    if (getInitialPermissions()) {
      try {
        Geolocation.getCurrentPosition(
          async ({ coords: { latitude, longitude } }) => {
            if (latitude && longitude) {
              dispatch(
                MapActions.actionSetRegionMap({
                  latitude,
                  longitude,
                  latitudeDelta: 0.011,
                  longitudeDelta: 0.011
                })
              );
              handleWatchPosition();
            }
          },
          err => {
            if (__DEV__) {
              console.tron.log("Erro do Geolocation: ", err);
              if (err.PERMISSION_DENIED === 1) {
                NavigationService.navigate('Initial')
              }
              return;
            }
          }, // Erro
          {
            timeout: 5000, // Tempo máximo para buscar a localização no inicio
            enableHighAccuracy: false // Pega a geolocalização pelo gps
          }
        );
      } catch (err) {
        if (__DEV__) {
          console.tron.log("Erro do Try Catch: ", err);
        }
      }
    }
  }

  useEffect(() => {
    handleGetPosition();
  }, [])

  function handleSavePoint() {
    dispatch(SavePointsActions.actionSavePointRequest({
      latitude: region.latitude,
      longitude: region.longitude,
      activity_id
    }))
  }

  return (
    <>
      <Header
        buttonBackActive={false}
        buttonCloseActive={false}
        title="Mapear Locais"
      />
      <Container>
        <LottieView source={require('./animation.json')} autoPlay loop style={{ height: 206, width: 157 }} />
        <StyledButton onPress={() => handleSavePoint()}>
          <StyledText>CONFIRMAR LOCAL</StyledText>
        </StyledButton>
        <StyledButton1 onPress={() => NavigationService.navigate('QrCodeGen')}>
          <StyledText>FINALIZAR</StyledText>
        </StyledButton1>
      </Container>
    </>
  );
}
