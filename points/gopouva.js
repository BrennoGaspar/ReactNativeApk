import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

function GopouvaScreen({ navigation }) {

    return (
      <LinearGradient
        colors={['#175200', '#00a200']}
        style={styles.container}
      >
        <View style={styles.containerbutton}>   
            <Text>Página do gopouva</Text>
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
  },
});

export default GopouvaScreen;