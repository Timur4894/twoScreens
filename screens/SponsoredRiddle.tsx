import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import PurpleButton from "../components/UI/PurpleButton";
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { useNavigation } from "@react-navigation/native";


function SponsoredRiddle(){
    const navigation = useNavigation();

    let [fontsLoaded] = useFonts({
        Nunito_400Regular,
        Nunito_700Bold,
    });

    if (!fontsLoaded) {
        return null;
    }

    return(
        <View style={styles.container}>
            <View style={styles.topButtons}>
                <Pressable onPress={()=>{}}>
                    <View style={styles.iconClose}>
                        <Ionicons name="close" size={32} color="#909090"/>  
                    </View>
                </Pressable>
                <Pressable onPress={()=>{}}>
                    <View style={styles.iconInfo}>
                        <Ionicons name='information' size={20} color="black"/>
                    </View>
                </Pressable>
            </View>

            <View style={styles.imageContainer}>
                <Image source={require('../components/img/puzzle.png')} style={styles.image} />
            </View>

            <View style={styles.textContainer}>
                <Text style={{fontSize: 22, marginTop: 16, marginBottom: 16, fontFamily: 'Nunito_700Bold'}}>
                    Before you start
                </Text>
                <Text style={{fontSize: 16, color: '#828282', fontFamily: 'Nunito_400Regular'}}>
                    For sponsored riddles, we offer a blend of digital and non-digital rewards! To ensure you receive your prizes, kindly provide your address. Note: For now this feature is exclusively for US users. Get ready to enjoy the best of both worlds!
                </Text>
            </View>
            
            
            <PurpleButton/>

            {/* <Pressable onPress={()=>{}}>
                <Text style={styles.goToAllReddles}>
                        Go To All Reddles
                </Text>
            </Pressable> */}

    
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    goToAllReddles: {
        marginBottom: 20,
        // marginTop: 28,
        color: '#7B62F4',
        fontFamily: 'Nunito_400Regular',   
    },
    topButtons: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 47,
        paddingHorizontal: 16,
        width: 375,
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
