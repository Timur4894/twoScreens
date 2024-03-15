import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddressFormScreen from './screens/AddressFormScreen';
import { StyleSheet, Text } from 'react-native';
import HeaderButton from './components/Buttons/HeaderButton';
import FontLoader from './constants/FontLoader';
import InfoIcon from './components/UI/InfoIcon';
import SponsoredRiddleScreen from './screens/SponsoredRiddleScreen';
import { colors } from './constants/Colors';

const Stack = createStackNavigator();

export enum ScreenType {
  SponsoredRiddleScreen = 'SponsoredRiddleScreen',
  AddressFormScreen = 'AddressFormScreen',
}

export default function App() {
  return (
    <FontLoader>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SponsoredRiddleScreen">
          <Stack.Screen
            name="SponsoredRiddleScreen"
            component={SponsoredRiddleScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <InfoIcon
                  onPress={() => {}}
                  color='black'
                  size={13}
                  marginRight={16}
                />
              ),
              headerLeft: () => (
                  <HeaderButton
                    onPress={() => {}}
                    name='close'
                    size={24}
                    color="#9EA3B1"
                    marginLeft={16}
                    roundstyle={{
                      backgroundColor: '#EAEDF4',
                      borderRadius: 999, 
                      width: 32,
                      height: 32,
                      padding: 4
                    }}
                  />
              ),
              headerTitle: '',
              headerShadowVisible: false, 
            })}
          />
          <Stack.Screen
            name="AddressFormScreen"
            component={AddressFormScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <Text style={[styles.saveButton, {fontFamily: 'Nunito_700Bold'}]}>
                  Save
                </Text>
              ),
              headerLeft: () => (
                <HeaderButton
                  onPress={()=>{navigation.navigate(ScreenType.SponsoredRiddleScreen)}}
                  name='chevron-back-outline'
                  size={26}
                  color="black"
                  marginLeft={16}
                />
              ),
              headerTitle: 'Address',
              headerTitleStyle: {fontSize: 16, fontFamily: 'Nunito_700Bold'},
              headerShadowVisible: false, 
              
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FontLoader>
  );
}

const styles = StyleSheet.create({
  saveButton: {
    fontSize: 16, 
    color: colors.purple, 
    marginRight: 16
  },

});
