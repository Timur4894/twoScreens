import { StyleSheet, View, Text, ScrollView, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import Inputsx from "../components/UI/Input";
import { useState } from "react"; 
import { useNavigation, NavigationProp } from "@react-navigation/native";
import ConfirmButton from "../components/UI/ConfirmButton";

//?
type RootStackParamList = {
    SponsoredRiddle: undefined;
  };

type SponsoredRiddleScreenNavigationProp = NavigationProp<
  RootStackParamList,
  'SponsoredRiddle'
>;
//?

function AddressForm(){
    const navigation = useNavigation<SponsoredRiddleScreenNavigationProp>();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [streetAddress, setStreetAddress] = useState("");

    const [Apt_Suit_Unit, setApt_Suite_Unit] = useState("");
    const [Suburb_City, setSuburb_City] = useState("");
    const [State, setState] = useState("");

    const [ZIP_Code, setZIP_Code] = useState("");
    const [Phone_Number, setPhone_Number] = useState("");


    const handleConfirmAddress = () => {
        // Обработка сохранения данных
    };

    let [fontsLoaded] = useFonts({
        Nunito_400Regular,
        Nunito_700Bold,
    });

    if (!fontsLoaded) {
        return null;
    }

    return(
        <ScrollView style={styles.container}>
            <View style={styles.topContainer}>
                
                <Pressable onPress={()=>{navigation.navigate('SponsoredRiddle')}}>
                    <Ionicons name='chevron-back-outline' size={26} /> 
                </Pressable>
    
                <Text style={{fontSize: 16, fontFamily: 'Nunito_700Bold', marginLeft: 20}}>
                    Adress
                </Text>
                <Text style={{fontSize: 16, color: "#7B62F4", fontFamily: 'Nunito_700Bold'}}>
                    Save
                </Text>
            </View>

            <View style={styles.noteContainer}>
                <Text>
                    <Text style={styles.noteTitle}>Note:</Text> 
                    <Text style={styles.noteText}>
                        This feature is exclusively for US users. Get ready to enjoy the best of both worlds!
                    </Text>
                </Text>
            </View>

            <Inputsx headerText='First name' placeholder="John" onChangeText={setFirstName} />
            <Inputsx headerText='Last name' placeholder="Wick" onChangeText={setLastName} />
            <Inputsx headerText='Street Address' placeholder="123 Main St" onChangeText={setStreetAddress} />

            <Inputsx headerText='Apt/Suite/Unit' placeholder="Apt 45" onChangeText={setApt_Suite_Unit} />
            <Inputsx headerText='Suburb/City' placeholder="Anytown" onChangeText={setSuburb_City} />
            <Inputsx headerText='State' placeholder="California (CA)" onChangeText={setState} />

            <Inputsx headerText='ZIP Code' placeholder="90210" onChangeText={setZIP_Code} />
            <Inputsx headerText='Phone Number' placeholder="555-123-4567" onChangeText={setPhone_Number} />


            <ConfirmButton onPress={handleConfirmAddress}/>

            <View style={{ height: 42 }} />
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16,
        marginTop: 52,
    },
    noteContainer: {
        marginTop: 32,
        width: 343,
        borderRadius: 16,
        borderColor: '#e3e5eb',
        borderWidth: 1,
        alignSelf: 'center',
        padding: 16,
        shadowColor: '#e3e5eb', 
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 4, 
        backgroundColor: '#fff',
        marginBottom:8, 
    },
    noteTitle: {
        color: '#7B62F4',
        fontFamily: 'Nunito_700Bold',
    },
    noteText: {
        color: '#7B62F4',
        fontFamily: 'Nunito_400Regular',
    }
})

export default AddressForm;
