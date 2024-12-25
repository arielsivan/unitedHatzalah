import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import Effy from './ui/Effy';

const AppLoading = () => {
  return (
    <View style={styles.loadingContainer}>
        <Effy feeling='happy'/>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>טוען...</Text>
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
