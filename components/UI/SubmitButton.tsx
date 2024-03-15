import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Colors } from "../../constants/Colors";

interface SubmitButtonProps {
    placeholder: string;
    onPress: () => void;
}

function SubmitButton({placeholder, onPress} : SubmitButtonProps) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>
                    {placeholder} 
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
    },
    button: {
        backgroundColor: Colors.purple,
        borderRadius: 30,
        paddingVertical: 15,
        paddingHorizontal: 95,
        shadowColor: Colors.purpleShadow,
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

export default SubmitButton;
