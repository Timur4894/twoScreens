import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import SubmitButton from "../components/UI/SubmitButton";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../constants/Colors";
import { ScreenEnums } from "../constants/ScreenEnums";

function SponsoredRiddleScreen(){

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/img/puzzle.png')} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.titleStyle}>
                    Before you start
                </Text>
                <Text style={styles.mainTextStyle}>
                    For sponsored riddles, we offer a blend of digital and non-digital rewards! To ensure you receive your prizes, kindly provide your address. Note: For now this feature is exclusively for US users. Get ready to enjoy the best of both worlds!
                </Text>
            </View>
            <SubmitButton placeholder="Add New Address" onPress={() => {navigation.navigate(ScreenEnums.AddressFormScreen)}}/>
            <Pressable onPress={()=>{}}>
                <Text style={styles.goToAllRiddles}>
                    Go To All Riddles
                </Text>
            </Pressable>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: Colors.white,
    },
    imageContainer: {
        width: 343,
        height: 207,
        marginTop: 32
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
    goToAllRiddles: {
        marginTop: 32,
        marginBottom: 42,
        color: Colors.purple,
        fontFamily: 'Nunito_400Regular'
    },
    titleStyle:{
        fontSize: 22,
        marginTop: 16, 
        marginBottom: 16, 
        fontFamily: 'Nunito_700Bold'
    },
    mainTextStyle:{
        fontSize: 16, 
        color: Colors.mainTextColor, 
        fontFamily: 'Nunito_400Regular'
    },
    textContainer: {
        marginHorizontal: 12
    }
});

export default SponsoredRiddleScreen;
