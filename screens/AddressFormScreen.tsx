import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useState } from "react"; 
// import { useNavigation, NavigationProp } from "@react-navigation/native";
import { Colors } from '../constants/Colors'; 
import SubmitButton from "../components/UI/SubmitButton";
import CustomInput from "../components/UI/Input";

function AddressFormScreen(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [Apt_Suit_Unit, setApt_Suite_Unit] = useState("");
    const [Suburb_City, setSuburb_City] = useState("");
    const [State, setState] = useState("");
    const [ZIP_Code, setZIP_Code] = useState("");
    const [Phone_Number, setPhone_Number] = useState("");

    const handleConfirmAddress = () => {
        // Data saving processing
    };

    return(
        <ScrollView style={styles.container}>
            <View style={styles.noteContainer}>
                <Text>
                    <Text style={styles.noteTitle}>Note: </Text> 
                    <Text style={styles.noteText}>
                        This feature is exclusively for US users. Get ready to enjoy the best of both worlds!
                    </Text>
                </Text>
            </View>
            <CustomInput headerText='First name' placeholder="John" onChangeText={setFirstName} />
            <CustomInput headerText='Last name' placeholder="Wick" onChangeText={setLastName} />
            <CustomInput headerText='Street Address' placeholder="123 Main St" onChangeText={setStreetAddress} />
            <CustomInput headerText='Apt/Suite/Unit' placeholder="Apt 45" onChangeText={setApt_Suite_Unit} />
            <CustomInput headerText='Suburb/City' placeholder="Anytown" onChangeText={setSuburb_City} />
            <CustomInput headerText='State' placeholder="California (CA)" onChangeText={setState} />
            <CustomInput headerText='ZIP Code' placeholder="90210" onChangeText={setZIP_Code} />
            <CustomInput headerText='Phone Number' placeholder="555-123-4567" onChangeText={setPhone_Number} />
            <View style={styles.submitButtonContainer}>
                <SubmitButton placeholder="Confirm Address" onPress={() => {}}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    submitButtonContainer: {
        marginTop: 58, 
        marginBottom: 54
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16,
        marginTop: 52,
    },
    noteContainer: {
        marginTop: 16,
        width: 343,
        borderRadius: 16,
        borderColor: Colors.whiteShadowColor, 
        borderWidth: 1,
        alignSelf: 'center',
        padding: 16,
        shadowColor: Colors.whiteShadowColor, 
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 4, 
        backgroundColor: Colors.white,
        marginBottom:8, 
    },
    noteTitle: {
        color: Colors.purple,
        fontFamily: 'Nunito_700Bold',
    },
    noteText: {
        color: Colors.purple,
        fontFamily: 'Nunito_400Regular',
    }
})

export default AddressFormScreen;
