import { StyleSheet, View, Text, Image } from 'react-native';
import React from 'react';
import { Exercise } from '@/types/data';
import PressableOption from './PressableOption';
import AnswerIndex from './AnswerIndex';

interface ChoiceExerciseProps {
  exercise: Exercise;
  onAnswerSelected: (isCorrect: boolean) => void;
}

export default function ChoiceExercise({
  exercise,
  onAnswerSelected,
}: ChoiceExerciseProps) {
  const { question, answers, correct } = exercise;

  const handleAnswerPress = (index: number) => {
    const isCorrect = index === correct;
    onAnswerSelected(isCorrect);
  };

  return (
    <View style={styles.container}>
      {exercise.type.startsWith('text') ? (
        <Text
          style={{
            textAlign: 'center',
            fontSize: 24,
            marginBottom: 20,
          }}
        >
          {question}
        </Text>
      ) : (
        <Image source={{ uri: question }} style={{ width: 200, height: 200 }} />
      )}

      <View style={styles.answersContainer}>
        {answers.map((answer, index) =>
          exercise.type.endsWith('text') ? (
            <PressableOption
              key={index}
              index={index}
              handleAnswerPress={handleAnswerPress}
            >
              <AnswerIndex text={(index + 1) as unknown as string} />
              <Text style={{ fontSize: 20 }}>{answer}</Text>
            </PressableOption>
          ) : (
            <PressableOption
              key={index}
              isSquare={true}
              index={index}
              handleAnswerPress={handleAnswerPress}
            >
              <Text style={{ fontSize: 50 }}>{answer}</Text>
            </PressableOption>
          ),
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  answersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    marginTop: 20,
  },
});
