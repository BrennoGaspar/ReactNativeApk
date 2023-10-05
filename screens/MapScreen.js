import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Linking, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';

function MapScreen({ navigation }) {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    async function getLocationPermissionAndLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert('Permissão negada!', 'É necessário aceitar a permissão.');
        return;
      }

      let userLocation = await Location.getCurrentPositionAsync({});
      setLocation(userLocation.coords);
    }

    getLocationPermissionAndLocation();
  }, []);

  const savedCoordinates = [
    { latitude: -23.469733127118552, longitude: -46.53904119997559, name: 'Ecoponto - Gopoúva', endereco: 'Rua Guarulhos, 34', path: 'Gopouva' },
    { latitude: -23.458130692081625, longitude: -46.52333304234075, name: 'Ecoponto - Paraventi', endereco: 'Rua Apolônia Vieira de Jesus, 91', path: 'Paraventi' }, 
    { latitude: -23.480555, longitude: -46.550555, name: 'teste 2' },
  ];

  const visibleMarkers = savedCoordinates.slice(0, 2);

  const handleRouteToMarker = (coordinate) => {
    if (!location) {
      Alert.alert('Localização não encontrada.', 'Por favor, espere enquanto procuramos sua localização.');
      return;
    }

    const url = `https://www.google.com/maps/dir/?api=1&origin=${location.latitude},${location.longitude}&destination=${coordinate.latitude},${coordinate.longitude}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      {location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="Sua Localização"
            pinColor="blue"
          />

          {visibleMarkers.map((coordinate, index) => (
            <Marker
              key={index}
              coordinate={coordinate}
              title={coordinate.name ? coordinate.name : 'Sem nome'}
            />
          ))}
        </MapView>
      )}
      <View style={styles.hudContainer}>
        {visibleMarkers.map((coordinate, index) => (
          <TouchableOpacity
            key={index}
            style={styles.hudButton}
            onPress={() => navigation.navigate(coordinate.path)}
          >
            <Ionicons name="navigate-outline" size={24} color="white" />
            <Text style={styles.buttonText}>{`${coordinate.name}`}</Text>
            <Text style={styles.buttonText}>{`${coordinate.endereco}`}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '60%',
    marginBottom: 10,
  },
  hudButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5%',
    margin: '2%',
    backgroundColor: 'rgba(35, 142, 35, 0.7)',
    borderRadius: 50,
  },
  buttonText: {
    color: 'white',
    marginTop: 5,
  },
  hudButtonNow: {
    backgroundColor: 'red',
    width: 55,
    height: 60,
    borderRadius: 30 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MapScreen;