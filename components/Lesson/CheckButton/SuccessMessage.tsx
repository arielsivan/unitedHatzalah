import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface SuccessMessageProps {
  onContinue: () => void;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ onContinue }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.successText}>Great!</Text>
      <TouchableOpacity style={styles.continueButton} onPress={onContinue}>
        <Text style={styles.buttonText}>CONTINUE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#263238',
    padding: 20,
    borderRadius: 15,
    width: '90%',
  },
  successText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 20,
  },
  continueButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default SuccessMessage;
