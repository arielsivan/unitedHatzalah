import { View, Text, StyleSheet } from 'react-native';
import React from 'react';


export default function AppError({error}: {error: string}) {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>Error: {error}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontWeight: 'bold',
  },
});
