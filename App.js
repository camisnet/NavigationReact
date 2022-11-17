import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Home';
import Mongagua from './components/Mongagua';
import Santos from './components/Santos';
import Osasco from './components/Osasco';
import Tatuape from './components/Tatuape';
import Peruibe from './components/Peruibe';


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
  <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Mongagua" component={Mongagua} />
        <Stack.Screen name="Santos" component={Santos} />
        <Stack.Screen name="Osasco" component={Osasco} />
        <Stack.Screen name="Tatuape" component={Tatuape} />
        <Stack.Screen name="Peruibe" component={Peruibe} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});