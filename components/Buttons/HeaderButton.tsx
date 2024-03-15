import React from "react";
import { View, Pressable, StyleProp, ViewStyle } from "react-native";
import { Ionicons } from '@expo/vector-icons';

type IconNames = keyof typeof Ionicons.glyphMap;

interface HeaderButtonProps {
    onPress: () => void;
    name: IconNames;
    size: number;
    color?: string;  
    marginLeft?: number; 
    marginRight?: number; 
    roundstyle?: StyleProp<ViewStyle>;
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

export default HeaderButton;
