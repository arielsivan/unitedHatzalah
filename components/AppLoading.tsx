import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const AppLoading = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: semi-transparent background
  },
});

export default AppLoading;
