import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

interface CustomInputProps {
    placeholder: string;
    headerText: string;
    onChangeText: (text: string) => void;
}

function CustomInput({ placeholder, headerText, onChangeText }: CustomInputProps) {

    return (
        <View style={styles.container}>
    
            <View style={{marginVertical: 8}}>
                <Text style={styles.text}>
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
    text: {
        fontFamily: 'Nunito_700Bold',
    }
});

export default CustomInput;
