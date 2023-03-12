import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import ContactScreen from './screens/ContactScreen';
import BlogScreen from './screens/BlogScreen';
import Onboarding from './screens/Onboarding';
import DrawerNavigation from './views/DrawerNavigation';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Home" component={DrawerNavigation} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="Blog" component={BlogScreen} />
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
