import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Pressable } from "react-native";
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { useNavigation } from "@react-navigation/native";

function ConfirmButton({onPress}:{onPress: any}) {
    const navigation = useNavigation();

    let [fontsLoaded] = useFonts({
        Nunito_400Regular,
        Nunito_700Bold,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>
                    Confirm Address 
                </Text>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: 44
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

});

export default ConfirmButton;
