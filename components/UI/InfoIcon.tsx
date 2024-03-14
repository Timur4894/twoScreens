import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

interface InfoIconProps {
  onPress: () => void;
  color: string;
  size: number;
  marginRight?: number;
}

const InfoIcon = ({ onPress, color, size, marginRight }: InfoIconProps) => {
  return (
    <Pressable onPress={onPress}>
        <View style={[styles.container, { marginRight: marginRight }]}>
        <Text style={[styles.icon, { color: color, fontSize: size }]}>i</Text>
        </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 999, 
    width: 20,
    height: 20,
    borderWidth: 1.5,
    borderColor: 'black',
  },
  icon: {
    fontFamily: 'Nunito_700Bold',
    marginTop: -1.5,
    marginLeft: 1
  },
});

export default InfoIcon;
