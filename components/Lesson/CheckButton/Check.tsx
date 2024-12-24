import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import ErrorMessage from './ErrorMessage';
import SuccessMessage from './SuccessMessage';

interface CheckButtonProps {
  correctAnswer: string;
  userSelectedAnswer: string; // Add this prop to accept the user's selected answer
}

const CheckButton: React.FC<CheckButtonProps> = ({ correctAnswer, userSelectedAnswer }) => {
  const [userAnswer, setUserAnswer] = useState<string | null>(null);
  const [resultMessage, setResultMessage] = useState<'success' | 'error' | null>(null);

  const checkAnswer = () => {
    setUserAnswer(userSelectedAnswer); // Set the user-selected answer
    if (!userSelectedAnswer) return;
    setResultMessage(userSelectedAnswer === correctAnswer ? 'success' : 'error');
  };

  return (
    <View style={styles.container}>
      {resultMessage === null && (
        <TouchableOpacity style={styles.checkButton} onPress={checkAnswer}>
          <Text style={styles.checkButtonText}>CHECK</Text>
        </TouchableOpacity>
      )}

      {resultMessage === 'success' && (
        <SuccessMessage
          onContinue={() => {
            setResultMessage(null);
            setUserAnswer(null);
          }}
        />
      )}

      {resultMessage === 'error' && (
        <ErrorMessage
          correctAnswer={correctAnswer}
          onDismiss={() => {
            setResultMessage(null);
            setUserAnswer(null);
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  promptText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  optionsContainer: {
    width: '100%',
    marginBottom: 20,
  },
  answerOption: {
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  checkButton: {
    padding: 15,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  checkButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default CheckButton;
