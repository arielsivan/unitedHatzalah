import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Modal, Pressable, Alert } from 'react-native';
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
  const { question, answers, correct,subQuestion } = exercise;
  const [modalVisible, setModalVisible] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState('');

  const handleAnswerPress = (index: number) => {
    // Alert.alert('Answer Pressed', `Index: ${index} - Correct: ${correct}`);
    const isCorrect = index === correct;

    if (!isCorrect) {
      setCorrectAnswer(answers[correct]);
      setModalVisible(true);
    }

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

      {subQuestion && (
        <Text
          style={{
            textAlign: 'center',
            fontSize: 24,
            marginBottom: 20,
          }
        }>
            {subQuestion}
        </Text>
        )}

      <View style={styles.answersContainer}>
        {answers.map((answer, index) =>
          exercise.type.endsWith('text') ? (
            <PressableOption
              correct={index === correct}
              key={index}
              index={index}
              handleAnswerPress={handleAnswerPress}
            >
              <AnswerIndex text={(index + 1).toString()} />
              <Text style={{ fontSize: 20 }}>{answer}</Text>
            </PressableOption>
          ) : (
            <PressableOption
              correct={index === correct}
              key={index}
              isSquare={true}
              index={index}
              handleAnswerPress={handleAnswerPress}
            >
                {answer.endsWith('.png') || answer.endsWith('.jpg') ? (
                    <Image source={{ uri: answer }} style={{ width: 100, height: 100 }} />
                ) : (
                    <Text style={{ fontSize: 50 }}>{answer}</Text>
                )}
            </PressableOption>
          )
        )}
      </View>

      {/* Modal to show the correct answer */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>אופס טעות😮</Text>
            <Text style={styles.modalText}>התשובה הנכונה היא:</Text>
            <Text style={styles.correctAnswer}>{correctAnswer}</Text>
            <Pressable
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  correctAnswer: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
