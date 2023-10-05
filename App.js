import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import InitialScreen from './screens/InitialScreen';
import TipsScreen from './screens/TipsScreen';
import MapScreen from './screens/MapScreen';
import GopouvaScreen from './points/gopouva';
import ParaventiScreen from './points/paraventi';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }} // Aqui você desativa o header
        />
        <Stack.Screen 
          name="Initial" 
          component={InitialScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Tips" 
          component={TipsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Map" 
          component={MapScreen}
          options={{ headerShown: false }}
        />


        <Stack.Screen 
          name="Gopouva" 
          component={GopouvaScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Paraventi" 
          component={ParaventiScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;