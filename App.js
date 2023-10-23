import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import InitialScreen from './screens/InitialScreen';
import TipsScreen from './screens/TipsScreen';
import MapScreen from './screens/MapScreen';
import GopouvaScreen from './points/gopouva';
import ParaventiScreen from './points/paraventi';
import BomClimaScreen from './points/bomclima';
import MacedoScreen from './points/macedo';
import PonteGrandeScreen from './points/pontegrande';
import VilaBarrosScreen from './points/vilabarros';
import ContinentalScreen from './points/continental';
import TorresTibagyScreen from './points/torrestibagy';
import IporangaScreen from './points/iporanga';
import VilaGalvãoScreen from './points/vilagalvao';
import CabuçuScreen from './points/cabucu';
import VilaRioScreen from './points/vilario';
import TimoteoPenteadoScreen from './points/timoteopenteado';
import JoaoDoPuloScreen from './points/joaodopulo';
import CabraliaScreen from './points/cabralia';
import MikailScreen from './points/mikail';


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
        <Stack.Screen 
          name="BomClima" 
          component={BomClimaScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Macedo" 
          component={MacedoScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="PonteGrande" 
          component={PonteGrandeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="VilaBarros" 
          component={VilaBarrosScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Continental" 
          component={ContinentalScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="TorresTibagy" 
          component={TorresTibagyScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Iporanga" 
          component={IporangaScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="VilaGalvão" 
          component={VilaGalvãoScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Cabuçu" 
          component={CabuçuScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="VilaRio" 
          component={VilaRioScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="TimoteoPenteado" 
          component={TimoteoPenteadoScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="JoaoDoPulo" 
          component={JoaoDoPuloScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Cabralia" 
          component={CabraliaScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Mikail" 
          component={MikailScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;