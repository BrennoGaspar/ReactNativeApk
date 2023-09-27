import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Dialog from "react-native-dialog";
import { LinearGradient } from 'expo-linear-gradient';

const frasesConscientizacao = [
  "Mau descarte de lixo prejudica o meio ambiente.",
  "Reciclar é uma forma de cuidar do nosso planeta.",
  "Lixo no chão é um ato de desrespeito à natureza.",
  "Reduza, reutilize e recicle para um mundo melhor.",
  "Cuide do planeta como se não houvesse um segundo.",
  "Lixo no mar afeta a vida marinha. Descarte corretamente!",
  "A poluição começa com o mau descarte do lixo.",
  "Seja um cidadão consciente, não jogue lixo nas ruas.",
  "Preserve a beleza da natureza, descarte seu lixo corretamente.",
  "Reciclar é um pequeno gesto que faz uma grande diferença."
];

function HomeScreen({ navigation }) {
  const [isAlertVisible, setAlertVisible] = useState(false);
  const [alertTitle, setAlertTitle] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const showAlert = () => {
    const randomIndex = Math.floor(Math.random() * frasesConscientizacao.length);
    const randomFrase = frasesConscientizacao[randomIndex];
    setAlertTitle("COLOQUE A MÃO NA CONSCIÊNCIA!");
    setAlertMessage(randomFrase);
    setAlertVisible(true);
  };

  const closeAlert = () => {
    setAlertVisible(false);
    navigation.navigate('Initial');
  };

  return (
    <LinearGradient
      colors={['#175200', '#00a200']} // Cores do gradiente
      style={styles.container}
    >
    <View style={styles.contentContainer}>
      <Image
        resizeMode="contain"
        style={styles.containerimage}
        source={require('../assets/logo.png')}
      />

      {/* Texto de bem-vindo */}
      <Text style={styles.containertext}>Bem-Vindo</Text>

      {/* Botao Entrar */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.containerbutton}
          onPress={showAlert}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>

      {/* Alert */}
      <Dialog.Container visible={isAlertVisible}>
        <Dialog.Title>{alertTitle}</Dialog.Title>
        <Dialog.Description>{alertMessage}</Dialog.Description>
        <Dialog.Button label="Fechar" onPress={closeAlert} />
      </Dialog.Container>
    </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerimage:{
    marginLeft: '20%',
  },
  containertext: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: '-20%',
    marginLeft: '42%',
  },
  buttonText: {
    textAlign: 'center',
    backgroundColor: '#d8ac14',
    fontSize: 40,
    width: 200,
    height: 60,
    lineHeight: 53,
    borderRadius: 50,
    color: 'white',
    fontWeight: 'bold',
    marginTop: '-40%',
    marginLeft: '185%',
  },
  buttonContainer: {
    alignItems: 'center', 
    marginTop: '40%',    
    width: 200,          
    height: 60,
  },
});

export default HomeScreen;