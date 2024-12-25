import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function NoItem({text}: {text: string}) {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7FB',
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: '#FF0000',
    textAlign: 'center',
  },
});
