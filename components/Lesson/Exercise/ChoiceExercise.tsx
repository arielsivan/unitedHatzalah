import { Pressable, StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { Exercise } from '@/types/data';

interface ChoiceExerciseProps {
  exercise: Exercise;
  onAnswerSelected: (isCorrect: boolean) => void;
  type : 'text-to-text' | 'text-to-image' | 'image-to-text' | 'image-to-image';
}

export default function ChoiceExercise({
  exercise,
  onAnswerSelected,
  type = 'text-to-text',
}: ChoiceExerciseProps) {
  const { question, answers, correct } = exercise;

  const handleAnswerPress = (index: number) => {
    const isCorrect = index === correct;
    console.log(`Option ${index + 1} pressed! Correct: ${isCorrect}`);
    onAnswerSelected(isCorrect);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{question}</Text>

      <View style={styles.answersContainer}>
        {answers.map((answer, index) => (
          <Pressable
            key={index}
            style={({ pressed }) => [
              styles.answerButton,
              pressed && [
                styles.answerButtonPressed,
                correct === index ? styles.correct : styles.incorrect,
              ],
            ]}
            onPress={() => handleAnswerPress(index)}
          >
            <View style={styles.answerContent}>
              <Text style={[styles.answerIndex]}>{index + 1}</Text>
              <Text style={styles.answerText}>{answer}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  questionText: {
    fontWeight: '400',
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 20,
    writingDirection: 'rtl',
  },
  answersContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    maxWidth: 700,
  },
  answerButton: {
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    borderWidth: 2,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 10,
    borderColor: '#e5e5e5',
    borderBottomWidth: 6,
    shadowRadius: 5,
    elevation: 5,
  },
  answerButtonPressed: {
    transform: [{ translateY: 5 }],
  },
  answerContent: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    display: 'flex',
  },
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
  answerText: {
    fontSize: 19,
    color: '#4b4b4b',
  },
  incorrect: {
    backgroundColor: '#ffdddd',
    borderColor: '#f61c1c',
  },
  correct: {
    backgroundColor: 'rgb(187, 254, 138)',
    borderColor: '#58CC02',
  },
});
