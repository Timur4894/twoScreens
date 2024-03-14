import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Pressable } from "react-native";
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { useNavigation, NavigationProp } from "@react-navigation/native";

type RootStackParamList = {
    AddressForm: undefined;
  };

type AddressFormScreenNavigationProp = NavigationProp<
  RootStackParamList,
  'AddressForm'
>;

function PurpleButton() {
    const navigation = useNavigation<AddressFormScreenNavigationProp>();

    let [fontsLoaded] = useFonts({
        Nunito_400Regular,
        Nunito_700Bold,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={[styles.container, { marginTop: 32 }]}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddressForm')}>
                <Text style={styles.buttonText}>
                    Add New Address
                    
                </Text>
            </TouchableOpacity>

            <Pressable onPress={()=>{}}>
                <Text style={styles.goToAllReddles}>
                        Go To All Reddles
                </Text>
            </Pressable>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        bottom: 54,
    },
    button: {
        backgroundColor: '#7B62F4',
        borderRadius: 30,
        paddingVertical: 15,
        paddingHorizontal: 95,
        shadowColor: '#5741C2',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 0.1,
        elevation: 5,
        width: 343,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'Nunito_700Bold'
    },
    goToAllReddles: {
        marginTop: 33,
        color: '#7B62F4',
        fontFamily: 'Nunito_400Regular'
    }
});

export default PurpleButton;
