import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Linking, Alert, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function InitialScreen({ navigation }) {

  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date();
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    setCurrentDate(formattedDate);
  }, []);

  return (
    <LinearGradient
      colors={['#175200', '#00a200']} // Cores do gradiente
      style={styles.container}>
        
    <View style={styles.contentContainer}>
      <Image resizeMode="contain"
        style={styles.containerimage}
        source={require('../assets/logo.png')}/>
    </View>

    <View style={styles.conteinerdata}>
      <Text style={styles.data}>Dia {currentDate}</Text>
    </View>

    <View style={styles.conteinercategorias}>
      <Text style={styles.categorias}>Categorias</Text>
    </View>

  <View style={styles.geral}>
    <View style={styles.conteinerdicas}>
      <TouchableOpacity onPress={()=>navigation.navigate('Tips')}>

      <View style={styles.imagedicasex}>
        <Image source={require('../assets/dicas.png')} style={styles.imagedicas}></Image>
      </View>

        <Text style={styles.textdicas}>Dicas de Reciclagem</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.conteinerpontos}>
      <TouchableOpacity onPress={()=>navigation.navigate('PontosColeta')}>

      <View style={styles.imagepontosex}>
        <Image source={require('../assets/pontos.png')} style={styles.imagepontos}></Image>
      </View>

        <Text style={styles.textpontos}>Pontos de Coleta</Text>
      </TouchableOpacity>
    </View>
  </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    alignItems: 'center',
  },
  containerimage: {
    width: 400,
    height: 400,
    marginTop: '-10%',
    marginLeft: '10%',
  },
  conteinerdata:{
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '79%',
    height: '7%',
    backgroundColor: 'green',
    marginLeft: '10%',
    marginTop: '-20%',
    borderRadius: 20,
  },
  data:{
    color: 'white',
    fontSize: 15,
  },
  conteinercategorias:{
    marginTop: '10%',
    marginBottom: '10%',
    marginLeft: '10%',
  },
  categorias:{
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  geral:{
    marginLeft: '5%',
    marginRight: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imagedicasex:{
    width: 150,
    height: 150,
    backgroundColor: 'green',
    borderRadius: 100,
  },
  imagepontosex:{
    width: 150,
    height: 150,
    backgroundColor: 'green',
    borderRadius: 100,
  },
  imagedicas:{
    width: 130,
    height: 130,
    marginLeft: '7%',
    marginTop: '5%',
  },
  imagepontos:{
    width: 130,
    height: 130,
    marginLeft: '7%',
    marginTop: '5%',
  },
  textdicas:{
    color: 'white',
    marginLeft: '6%',
    fontSize: 20,
    width: '60%',
    textAlign: 'center'
  },
  textpontos:{
    color: 'white',
    marginLeft: '10%',
    fontSize: 20,
    width: '60%',
    textAlign: 'center'
  },
});

export default InitialScreen;