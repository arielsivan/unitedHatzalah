import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface ErrorMessageProps {
  correctAnswer: string;
  onDismiss: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ correctAnswer, onDismiss }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>Incorrect</Text>
      <Text style={styles.correctAnswerText}>Correct Answer:</Text>
      <Text style={styles.correctAnswer}>{correctAnswer}</Text>
      <TouchableOpacity style={styles.dismissButton} onPress={onDismiss}>
        <Text style={styles.buttonText}>GOT IT</Text>
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
  errorText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF5252',
    marginBottom: 10,
  },
  correctAnswerText: {
    fontSize: 16,
    color: '#FFF',
  },
  correctAnswer: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20,
  },
  dismissButton: {
    backgroundColor: '#FF5252',
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

export default ErrorMessage;
