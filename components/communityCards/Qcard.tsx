import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors }  from '@/constants/Colors';

interface Props {
  title: string;
}

export default function Qcard({ title }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{title}</Text>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => console.log('Pressed')}>
        <Ionicons name="arrow-back" size={24} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.accent, // צבע כתום
    borderRadius: 25,
    padding: 20,
    marginVertical: 25,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // צל לאנדרואיד
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFF',
    marginBottom: 20, 
  },
  iconContainer: {
    position: 'absolute',
    left: 20,
    bottom: 10, 
  },
});
