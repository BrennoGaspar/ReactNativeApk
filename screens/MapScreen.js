import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Linking, Alert, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

function MapScreen({ navigation }) {
  const [location, setLocation] = useState(null);
  const [closestCoordinates, setClosestCoordinates] = useState([]);
  const [limitedCoordinates, setLimitedCoordinates] = useState([]);

  const savedCoordinates = [
    { latitude: -23.469733127118552, longitude: -46.53904119997559, name: 'Ecoponto - Gopoúva', endereco: 'Rua Nadir, 34', path: 'Gopouva' },
    { latitude: -23.458130692081625, longitude: -46.52333304234075, name: 'Ecoponto - Paraventi', endereco: 'Rua Apolônia Vieira de Jesus, 91', path: 'Paraventi' },
    { latitude: -23.454077539421622, longitude: -46.51333923714871, name: 'Ecoponto - Bom Clima', endereco: 'Rua João Bernardo de Medeiros, 800', path: 'BomClima' },
    { latitude: -23.470952232507297, longitude: -46.520823730652616, name: 'Ecoponto - Macedo', endereco: 'Rua Soldado Estanislau Wojcik, 26', path: 'Macedo' },
    { latitude: -23.508233042041653, longitude: -46.55596585766167, name: 'Ecoponto - Ponte Grande', endereco: 'Alameda Josefina L. Zamataro, 233', path: 'PonteGrande' },
    { latitude: -23.451019340949422, longitude: -46.50397100000583, name: 'Ecoponto - Vila Barros', endereco: 'Rua Guilherme Lino dos Santos, 349', path: 'VilaBarros' },
    { latitude: -23.429494037438868, longitude: -46.55688486769175, name: 'Ecoponto - Continental', endereco: 'Rua Valdimiro Laurentino Pêssoa, 655', path: 'Continental' },
    { latitude: -23.45709948249857, longitude: -46.556589059335124, name: 'Ecoponto - Torres Tibagy', endereco: 'Rua Ouvidor, 337', path: 'TorresTibagy' },
    { latitude: -23.44065561611703, longitude: -46.532214263326544, name: 'Ecoponto - Iporanga', endereco: ' Rua Adélia Sadalla, 166', path: 'Iporanga' },
    { latitude: -23.44809746453097, longitude: -46.56765185589724, name: 'Ecoponto - Vila Galvão', endereco: 'Rua Ipiranga, 543', path: 'VilaGalvão' },
    { latitude: -23.404052565062223, longitude: -46.53621613619393, name: 'Ecoponto - Cabuçu', endereco: 'Avenida Pedro de Souza Lopes, 7800', path: 'Cabuçu' },
    { latitude: -23.433005549958224, longitude: -46.537593659718816, name: 'Ecoponto - Vila Rio', endereco: 'Avenida Benjamin Harris Hunnicutt, 1509', path: 'VilaRio' },
    { latitude: -23.462931349151273, longitude: -46.56812775256899, name: 'Ecoponto - Timóteo Penteado', endereco: 'Avenida Faustino Ramalho, 977', path: 'TimoteoPenteado' },
    { latitude: -23.439039964360543, longitude: -46.5154065729087, name: 'Ecoponto - João do Pulo', endereco: 'Rua São Tomás de Aquino, 61', path: 'JoaoDoPulo' },
    { latitude: -23.43459033861461, longitude: -46.51365139351749, name: 'Ecoponto - Cabrália', endereco: 'Rua Cabrália, 100', path: 'Cabralia' },
    { latitude: -23.408737044678546, longitude: -46.49423402881369, name: 'Ecoponto - Mikail', endereco: 'Rua Justiniano Salvador dos Santos, 269', path: 'Mikail' },
  ];

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

  useEffect(() => {
    if (location) {
      const coordinatesWithDistance = savedCoordinates.map(coordinate => {
        const distance = getDistance(location.latitude, location.longitude, coordinate.latitude, coordinate.longitude);
        return { ...coordinate, distance };
      });

      const sortedCoordinates = coordinatesWithDistance.sort((a, b) => a.distance - b.distance);

      setClosestCoordinates(sortedCoordinates);

      const limitedCoordinates = sortedCoordinates.slice(0, 3);

      setLimitedCoordinates(limitedCoordinates);
    }
  }, [location]);

  const getDistance = (lat1, lon1, lat2, lon2) => {
    const radlat1 = (Math.PI * lat1) / 180;
    const radlat2 = (Math.PI * lat2) / 180;
    const radlon1 = (Math.PI * lon1) / 180;
    const radlon2 = (Math.PI * lon2) / 180;
    const theta = lon1 - lon2;
    const radtheta = (Math.PI * theta) / 180;
    let dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    dist = dist * 1.609344;
    return dist;
  };

  return (
    <LinearGradient
      colors={['#175200', '#00a200']}
      style={styles.container}
    >
      <View style={styles.containerbutton}>
        <TouchableOpacity onPress={() => navigation.navigate('Initial')} style={styles.button}>
          <Text>❌</Text>
        </TouchableOpacity>
        <Image source={require('../assets/logo.png')} style={styles.imagelogo} />
      </View>

      <Text style={styles.titulo}>Ecopontos próximos:</Text>

      {location && (
        <View style={styles.mapContainer}>
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

            {limitedCoordinates.length > 0 &&
              limitedCoordinates.map((coordinate, index) => (
                <Marker
                  key={index}
                  coordinate={{
                    latitude: coordinate.latitude,
                    longitude: coordinate.longitude,
                  }}
                  title={coordinate.name ? coordinate.name : 'Sem nome'}
                />
              ))}
          </MapView>
        </View>
      )}
      <View style={styles.hudContainer}>
        {limitedCoordinates.map((coordinate, index) => (
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
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerbutton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginTop: '-10%',
  },
  button: {
    backgroundColor: 'transparent',
    padding: 10,
    marginTop: '8%',
  },
  imagelogo: {
    width: 80,
    height: 80,
    marginTop: '8%',
  },
  titulo:{
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    marginTop: '-3%',
    marginBottom: '5%',
    marginLeft: '5%',
  },
  mapContainer: {
    width: '90%',
    height: '40%',
    borderColor: 'green',
    borderWidth: 10,
    marginBottom: 10,
    marginLeft: '5%',
  },
  map: {
    flex: 1,
  },
  hudContainer: {
    alignItems: 'center',
    padding: 10,
    marginTop: '-5%',
  },
  hudButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: '20%',
    marginTop: '2%',
    backgroundColor: 'rgba(35, 142, 35, 0.7)',
    borderRadius: 10,
  },  
  buttonText: {
    color: 'white',
    marginTop: 5,
  },
});

export default MapScreen;