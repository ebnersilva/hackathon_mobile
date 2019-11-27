import React, { useEffect, useState } from 'react';
import { StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps"; // remove PROVIDER_GOOGLE import if not using Google Maps
import { useSelector, useDispatch } from "react-redux";
import { check, PERMISSIONS } from "react-native-permissions";
import Geolocation from "@react-native-community/geolocation";
import NightMapStyle from "./MapStyles/NightMapStyle.json";

import EasterEggs from './components/EasterEggs';
import ContentPage from "./components/ContentPage";

import LottieView from 'lottie-react-native';

import AnimationSuccess from "~/components/AnimationSuccess";



import * as MapActions from "~/store/modules/map/actions";
import * as GetPointsActions from "~/store/modules/getPoints/actions";

import NavigationService from "~/services/navigation";

import { ContainerAnimation } from "./styles";

var mapView;

const styles = StyleSheet.create({
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});

export default function Radar() {
  const dispatch = useDispatch();

  const [watchID, setWatchID] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [contentModalVisible, setContentModalVisible] = useState(true);

  const region = useSelector(state => state.map.region);
  const points = useSelector(state => state.getPoints.data);

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
    console.tron.log('Chamou o watch Position')
    try {
      Geolocation.watchPosition(
        async ({ coords: { latitude, longitude } }) => {
          if (latitude && longitude) {
            dispatch(
              MapActions.actionSetRegionMap({
                latitude,
                longitude,
                latitudeDelta: 0.0006004500536320734,
                longitudeDelta: 0.0003463402390551096
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
                  latitudeDelta: 0.0006004500536320734,
                  longitudeDelta: 0.0003463402390551096
                })
              );
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
          console.tron.log("Erro do Try Catch: ", err);AnimationSuccess
          AnimationSuccess
          AnimationSuccess
        }
      }
    }
  }

  useEffect(() => {
    handleGetPosition();
    setWatchID(handleWatchPosition());
    dispatch(GetPointsActions.actionGetPointsRequest());
  }, [])

  function onRegionChangeComplete(coordinate){
    console.tron.log(coordinate);
  }

  return (
    <>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        initialRegion={region}
        // onPanDrag={data => handleMyLocationButton(data)}
        customMapStyle={NightMapStyle}
        showsTraffic={false}
        // eslint-disable-next-line no-return-assign
        ref={el => (mapView = el)}
        // zoomEnabled={false}
        onRegionChangeComplete={onRegionChangeComplete}
        showsMyLocationButton
        showCompass={false}
      >
        {region && <Marker pinColor='blue' coordinate={{ latitude: region.latitude, longitude: region.longitude}}/>}
        {points && points.length > 0 && points.map(point =>
          <Marker key={point.id} onPress={() => setModalVisible(true)} coordinate={{ latitude: Number(point.latitude), longitude: Number(point.longitude)}} />
        )}
      </MapView>
       <ContainerAnimation>
        <LottieView source={require('./animation.json')} autoPlay loop style={{ height: 400, width: 400 }} />
      </ContainerAnimation>
      {modalVisible && <EasterEggs showModalSuccess={() => setSuccessModalVisible(true)} hideModal={() => setModalVisible(false)} visible={modalVisible} />}
      {successModalVisible && <AnimationSuccess showModalContent={() => setContentModalVisible(true)} hideModal={() => setSuccessModalVisible(false)} message="Você conseguiu desbloquear" />}
      {contentModalVisible && <ContentPage hideModal={() => setContentModalVisible(false)}/>}
    </>
  );
}
