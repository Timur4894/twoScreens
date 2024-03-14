import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import SponsoredRiddle from './screens/SponsoredRiddle';
import AddressForm from './screens/AddressForm';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='dark'/>
      <Stack.Navigator initialRouteName="SponsoredRiddle">
        <Stack.Screen name="SponsoredRiddle" component={SponsoredRiddle} options={{ headerShown: false }} />
        <Stack.Screen name="AddressForm" component={AddressForm} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
