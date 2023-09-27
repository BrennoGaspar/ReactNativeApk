import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import InitialScreen from './screens/InitialScreen';
import TipsScreen from './screens/TipsScreen';
/*import ReuseScreen from './screens/ReuseScreen';
import EmissionScreen from './screens/EmissionScreen';


<Stack.Screen
          name="Reuse"
          component={ReuseScreen}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="Emission"
          component={EmissionScreen}
          options={{ headerShown: false }} 
        />
*/

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;