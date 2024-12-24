import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';

interface Props {
  title: string;
}

export default function Qcard({ title }: Props) {
  return (
    <View style={styles.rounded}>
      <Text style={styles.text}>{title}</Text>
      <TouchableOpacity 
      style={styles.iconContainer}
      onPress={() => console.log('Pressed')}>
        <Ionicons
            name={'arrow-back'}
            size={24}
            color="#a5a5a5"
          />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    left: 30,
    bottom: 10,
  },
  text:{
    lineHeight: 32,
    textAlign: 'center',
    fontSize: 18,
    margin: 10,
    fontWeight: 'bold',
  },
  rounded: {
    backgroundColor: Colors.accent,
    borderRadius: 100,
    height: 150,
    width: '100%',
    alignContent: 'center',
    padding: 30,
    fontSize: 28,
    lineHeight: 32,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
