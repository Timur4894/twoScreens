import React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';

type IconNames = keyof typeof Ionicons.glyphMap;

interface HeaderButtonProps {
    onPress: () => void;
    name: IconNames;
    size: number;
    color?: string;  
    marginLeft?: number; 
    marginRight?: number; 
    roundstyle?: any //????
}

const HeaderButton = ({ onPress, name, size, color="black", marginLeft = 0, marginRight = 0, roundstyle = {}} : HeaderButtonProps) => {
    return (
        <View style={{ marginLeft: marginLeft, marginRight: marginRight }}>
            <Pressable onPress={onPress} style={roundstyle}>  
                <Ionicons name={name} size={size} color={color} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'gray',
        borderRadius: 999, 
    },
  });

export default HeaderButton;
