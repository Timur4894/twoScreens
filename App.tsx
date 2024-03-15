import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddressFormScreen from './screens/AddressFormScreen';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import FontLoader from './constants/FontLoader';
import SponsoredRiddleScreen from './screens/SponsoredRiddleScreen';
import { Colors } from './constants/Colors';
import { ScreenEnums } from './constants/ScreenEnums';
import ClodeCircle from './components/svg/ClodeCircle'; 
import Arrow from './components/svg/Arrow'; 
import InformationIcon from './components/svg/InformationIcon'; 

const Stack = createStackNavigator();

export default function App() {

  const SaveButton = () => (
    <Text style={styles.saveButton}>
      Save
    </Text> 
  );

  return (
    <FontLoader>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SponsoredRiddleScreen">
          <Stack.Screen
            name="SponsoredRiddleScreen"
            component={SponsoredRiddleScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <View style={styles.TopRightButtonsMargin}>
                  <InformationIcon/>
                </View>
              ),
              headerLeft: () => (
                <View style={styles.TopLeftButtonsMargin}>
                  <Pressable onPress={() => {}}>  
                    <ClodeCircle/>
                  </Pressable>  
                </View>   
              ),
              headerTitle: '',
              headerShadowVisible: false, 
            })}
          />
          <Stack.Screen
            name="AddressFormScreen"
            component={AddressFormScreen}
            options={({ navigation }) => ({
              headerRight: () => <SaveButton/>,
              headerLeft: () => (
                <View style={styles.TopLeftButtonsMargin}>
                  <Pressable onPress={() => navigation.navigate(ScreenEnums.SponsoredRiddleScreen)}>
                    <Arrow/>
                  </Pressable>
                </View>
              ),
              headerTitle: 'Address',
              headerTitleStyle: styles.headerTitleStyle,
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
    color: Colors.purple, 
    marginRight: 16,
    fontFamily: 'Nunito_700Bold'
  },
  headerTitleStyle:{
    fontSize: 16,
    fontFamily: 'Nunito_700Bold'
  },
  closeCircleButton: {
    backgroundColor: Colors.borderColor,
    borderRadius: 999, 
    width: 32,
    height: 32,
    padding: 4
  },
  TopLeftButtonsMargin: { 
    marginLeft: 16
  },
  TopRightButtonsMargin: { 
    marginRight: 16
  },
  
});
