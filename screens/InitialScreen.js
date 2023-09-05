import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Linking, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';

function InitialScreen({ navigation }) {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    async function getLocationPermissionAndLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert(
          'Permissão negada!',
          'É necessário aceitar a permissão.'
        );
        return;
      }

      let userLocation = await Location.getCurrentPositionAsync({});
      setLocation(userLocation.coords);
    }

    getLocationPermissionAndLocation();
  }, []);

  const savedCoordinates = [
    { latitude: -23.469533127118552, longitude: -46.53904119997559 },
    { latitude: -23.475333, longitude: -46.545041 },
    { latitude: -23.480555, longitude: -46.550555 },
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
            title="Your Location"
            pinColor="green"
          />

          {/* Render markers on the map */}
          {visibleMarkers.map((coordinate, index) => (
            <Marker
              key={index}
              coordinate={coordinate}
              title={`Marker ${index + 1}`}
            />
          ))}
        </MapView>
      )}
      <View style={styles.hudContainer}>
        
        {/* Render buttons for each visible marker */}
        {visibleMarkers.map((coordinate, index) => (
          <TouchableOpacity
            key={index}
            style={styles.hudButton}
            onPress={() => handleRouteToMarker(coordinate)}
          >
            <Ionicons name="navigate-outline" size={24} color="white" />
            <Text style={styles.buttonText}>Route to Marker {index + 1}</Text>
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
  hudContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingVertical: 10,
  },
  hudButton: {
    justifyContent: 'center',
    alignItems: 'center',
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

export default InitialScreen;