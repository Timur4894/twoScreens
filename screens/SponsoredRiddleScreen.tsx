import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import SubmitButton from "../components/UI/SubmitButton";
import { useNavigation } from "@react-navigation/native";
import { ScreenType } from "../App";

function SponsoredRiddle(){

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
            <SubmitButton placeholder="Add New Address" onPress={() => navigation.navigate(ScreenType.AddressForm)}/>
            <Pressable onPress={()=>{}}>
                <Text style={styles.goToAllReddles}>
                        Go To All Reddles
                </Text>
            </Pressable>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#fff',
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
    goToAllReddles: {
        marginTop: 32,
        marginBottom: 42,
        color: '#7B62F4',
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
        color: '#828282', 
        fontFamily: 'Nunito_400Regular'
    },
    textContainer: {
        marginHorizontal: 12
    },
    iconClose: {
        borderRadius: 100,
        backgroundColor: '#e1e1e1',
        padding:2
    },
    iconInfo: {
        borderRadius: 100,
        borderWidth: 2,
        borderColor: "black"
    }
});

export default SponsoredRiddle;
