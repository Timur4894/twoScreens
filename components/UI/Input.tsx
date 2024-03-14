import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { useFonts, Nunito_400Regular } from '@expo-google-fonts/nunito';

function Inputsx({ placeholder, headerText, onChangeText } : { placeholder:String, headerText: String, onChangeText: any}) {
    let [fontsLoaded] = useFonts({
        Nunito_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
    
            <View style={{marginVertical: 8}}>
                <Text>
                    {headerText}
                </Text>
            </View>
           

            <TextInput
                placeholder={placeholder}
                style={styles.input}
                placeholderTextColor="#9E9E9E"
                onChangeText={onChangeText}
            />
    

            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        flexDirection: 'column',
        marginTop: 8, 
    },
    input: {
        width: '100%',
        height: 58,
        backgroundColor: '#EAEDF4',
        borderRadius: 16,
        paddingHorizontal: 16,
        fontFamily: 'Nunito_400Regular',
        fontSize: 16,
    },
});

export default Inputsx;
