import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Linking, Alert, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


function TorresTibagyScreen({ navigation }) {
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
    { latitude: -23.45709948249857, longitude: -46.556589059335124, name: 'Ecoponto - Torres Tibagy' },
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
      <LinearGradient
        colors={['#175200', '#00a200']}
        style={styles.container}
      >
        <View style={styles.containerbutton}>
          <TouchableOpacity onPress={() => navigation.navigate('Map')} style={styles.button}>
            <Text>❌</Text>
          </TouchableOpacity>
  
          <Image source={require('../assets/logo.png')} style={styles.imagelogo} />
        </View>
  
        <View style={styles.containertitulo}>
          <Text style={styles.titulo}>Ecoponto - Torres Tibagy</Text>
        </View>

        <View style={styles.imagemcontainer}>
        <Image source={require('../assets/pontos/torrestibagy.png')} style={styles.imagem} />
        </View>

        <View style={styles.enderecocontainer}>
        <Text>
          <Text style={styles.enderecotitulo}>Endereço:</Text>
          {' '}
          <Text style={styles.endereco}> Rua Ouvidor, 337 </Text>
        </Text>
        </View>

        <View style={styles.contatocontainer}>
        <Text>
          <Text style={styles.contatotitulo}>Contato: </Text>
          {' '}
          <Text style={styles.contato}>(11) 2468-7206</Text>
        </Text>
        </View>

        <View style={styles.horariocontainer}>
          <Text style={styles.horariotitulo}>Horário de Funcionamento: </Text>
          <Text style={styles.horario}>
            {''}
            Segunda a Sábado das 7h às 19h
          </Text>
        </View>

        <View style={styles.materiaiscontainer}>
        <Text style={styles.materiaistitulo}>Materiais Coletados:</Text>
          <Text style={styles.materiais}>
            {''}
            Entulho, Gesso, Solo, Sofás, Colchões, Esquadrinhas, Sanitários cerâmicos, Eletroeletronicos, Madeiras, Tronco de árvores, Folhas e capina, Pneus, Óleo de cozinha e Material de coleta seletiva
          </Text>
        </View>

        <View>
          <TouchableOpacity
            style={styles.hudButton}
            onPress={() => handleRouteToMarker(visibleMarkers[0])}>
            <Text style={styles.buttontext}>Traçar rota</Text>
          </TouchableOpacity>
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
    marginTop: '-5%',
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
  containertitulo:{
    marginLeft: '15%',
  },
  titulo: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  enderecocontainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  enderecotitulo: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  endereco: {
    flex: 1,
  },
  imagem:{
    width:360,
    height:250,
    borderRadius: 10,
    borderColor: 'green',
    borderWidth: 10,
    marginLeft:'4%',
    margin:'5%',
  },
  enderecocontainer:{
    marginLeft: '5%',
    marginBottom: '5%',
  },
  enderecotitulo:{
    color: '#fff',
    fontWeight: 'bold',
  },
  endereco:{
    color: '#fff',
  },
  contatocontainer:{
    marginLeft: '5%',
    marginBottom: '5%',
  },
  contatotitulo:{
    color: '#fff',
    fontWeight: 'bold',
  },
  contato:{
    color: '#fff',
  },
  horariocontainer:{
    marginLeft: '5%',
    marginBottom: '5%',
  },
  horariotitulo:{
    color: '#fff',
    fontWeight: 'bold',
  },
  horario:{
    color: '#fff',
    textAlign: 'justify',
    width: '90%',
  },
  materiaiscontainer:{
    marginLeft: '5%',
    marginBottom: '5%',
  },
  materiaistitulo:{
    color: '#fff',
    fontWeight: 'bold',
  },
  materiais:{
    color: '#fff',
    textAlign: 'justify',
    width: '90%',
  },
  hudButton:{
    backgroundColor: 'yellow',
    width: '45%',
    marginLeft: '27%',
    height: '28%',
    borderRadius: 20,
    justifyContent: 'center',
    marginTop: '3%',
  },
  buttontext: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: '15%',
    marginTop: '-5%',
  },
});

export default TorresTibagyScreen;