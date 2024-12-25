import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function AnswerIndex({ text }: { text: string }) {
  return (
    <View>
      <Text style={[styles.answerIndex]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  answerIndex: {
    borderWidth: 2,
    borderColor: '#e5e5e5',
    borderRadius: 8,
    width: 30,
    height: 30,
    alignSelf: 'flex-end',
    textAlign: 'center',
    fontSize: 16,
    marginLeft: 10,
  },
});
