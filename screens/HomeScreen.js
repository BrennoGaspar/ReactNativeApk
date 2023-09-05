// HomeScreen.js

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';

function ButtonPress({ navigation }) {
  console.log('O usuário clicou no botão!');
  alert('Está funcionando!');
  navigation.navigate('Initial');
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <ImageBackground
        style={styles.containerbackground}
        source={require('../assets/fundo.jpg')}>

        <StatusBar style="auto"/>

        <View style={styles.contentContainer}>
          <Text style={styles.containertext}>BEM-VINDO!</Text>

          <Image
            style={styles.containerimage}
            source={require('../assets/logo.png')}/>

          <Text style={styles.nomeimage}>EcoGru</Text>

          <TouchableOpacity
            style={styles.containerbutton}
            onPress={() => ButtonPress({ navigation })}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>

      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  containerbackground:{
    width: '100%',
    height: '100%',
  },
  container: {
    backgroundColor: 'green',
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    marginBottom: '30%', 
    marginTop: '30%', 
  },
  containertext: {
    color:'white',
    fontSize: 30,
    fontWeight:"bold",
  },
  containerimage:{
    width: 200,
    height: 200,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 200,
    marginTop: '5%',
  },
  nomeimage: {
    color:'white',
    fontSize: 30,
    fontWeight: "bold",
    marginTop: '5%',
  },
  buttonText: {
    textAlign: 'center',
    backgroundColor: '#CDBD43',
    width: 130,
    height: 40,
    lineHeight: 40,
    borderRadius: 5,
    color: 'white',
    fontWeight: 'bold',
    marginTop: '3%',
  },
});

export default HomeScreen;