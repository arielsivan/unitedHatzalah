import ChoiceExercise from '@/components/Lesson/ChoiceExercise';
import LessonBar from '@/components/Lesson/LessonBar';
import { Exercise, Lesson } from '@/types/data';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function LessonScreen ({}){
  const lesson = {
    id: 'lesson0',
    title: 'מבוא לאנטומיה',
    description: 'סקירה כללית של האנטומיה האנושית וחשיבותה.',
    icon: '📘',
    color: '#8A2BE2',
    exercises: [
      {
        id: 'exercise0',
        title: 'יסודות האנטומיה',
        type: 'choice' as 'choice',
        answers: ['תאים', 'רקמות', 'איברים', 'כל התשובות נכונות'],
        correct: 3,
        question: 'מהם אבני הבניין של גוף האדם?',
      },
    ],
  };

  const [currentExercise, setCurrentExercise] = React.useState(0);

  const exer : Exercise = lesson.exercises[currentExercise];

  return (
    <View style={styles.container}>
      <LessonBar />
      {exer.type === 'choice' ? <ChoiceExercise {...exer} /> : null}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});