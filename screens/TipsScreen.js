import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

function TipsScreen({ navigation }) {
    const [isOpen, setIsOpen] = useState([false, false, false, false, false]);
  
    const toggleDetails = (index) => {
      const newIsOpen = [...isOpen];
      newIsOpen[index] = !newIsOpen[index];
      setIsOpen(newIsOpen);
    };
  
    const buttonData = [
      { text: 'Quais materiais que não podem ser reciclados?', content: 'Espuma, Esponja de cozinha, Tomadas, Acrílico, Bandejas de plástico, Embalagem Metalizada (Café e Salgadinho), Cabos de Panela, Isopor.' },

      { text: 'Como levar o lixo para descarte?', content: 'Separe o lixo seco (reciclável) do lixo úmido (orgânico e comum) utilizando latões diferentes. Caso disponha de espaço, utilize sacos de plástico para cada um dos materiais recicláveis: vidro, plástico, metal e papel.' },

      { text: 'Como reutilizar uma garrafa plástica?', content: 'Uma ideia seria cortar as garrafas ao meio, decorá-las, e elas se transformarão em porta-lápis.' },

      { text: 'Como descartar aparelhos eletrônicos?', content: 'Primeiro apague seus dados, para que outras pessoas não consigam acessa-los, depois, entre em contato com o fabricante, verificando se este dispõe pontos de coleta para o descarte, caso não seja possível, descarte em Ecopontos oficiais da prefeitura da região.' },

      { text: 'Como diminuir a quantidade de material descartável produzido?', content: 'Utilize mais itens reutilizáveis no dia a dia (como copos, canudos, sacolas, entre outros), reduza a compra de produtos com muitas embalagens e tenha consciência quando for fazer a impressão de papéis.' },
    ];
  
    return (
      <LinearGradient
        colors={['#175200', '#00a200']}
        style={styles.container}
      >
        <View style={styles.containerbutton}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
            <Text>❌</Text>
          </TouchableOpacity>
  
          <Image source={require('../assets/logo.png')} style={styles.imagelogo} />
        </View>
  
        <View style={styles.containertitulo}>
          <Text style={styles.titulo}>Dicas de reciclagem:</Text>
        </View>
  
        <View style={styles.buttonContainer}>
          {buttonData.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => toggleDetails(index)}
              style={[styles.questionButton, isOpen[index] && styles.openedQuestionButton]}
            >
              <Text style={styles.questionButtonText}>
                {isOpen[index] ? '' : ''}{item.text}
              </Text>
              {isOpen[index] && (
                <Animatable.View
                  animation="slideInUp"
                  duration={500}
                  style={[
                    styles.content,
                    {
                      backgroundColor: 'green',
                      marginTop: 0,
                      display: 'flex',
                    },
                  ]}
                >
                  <Text style={{ color: 'white' }}>{item.content}</Text>
                </Animatable.View>
              )}
            </TouchableOpacity>
          ))}
        </View>
  
        <StatusBar style="auto" />
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
  containertitulo: {
    padding: 10,
    marginTop: '-5%',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  questionButton: {
    backgroundColor: 'green',
    borderRadius: 10,
    margin: 10,
    paddingVertical: 20,
    width: 350,
    alignItems: 'center',
  },
  openedQuestionButton: {
    marginBottom: 0,
  },
  questionButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    backgroundColor: 'green',
    marginTop: 10,
    padding: 15,
  },
});

export default TipsScreen;