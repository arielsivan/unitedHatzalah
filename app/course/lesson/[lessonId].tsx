import ChoiceExercise from '@/components/Lesson/Exercise/ChoiceExercise';
import FillExercise from '@/components/Lesson/Exercise/FillExercise';
import FinishScreen from '@/components/Lesson/FinishScreen';
import LessonBar from '@/components/Lesson/LessonBar';
import { Exercise } from '@/types/data';
import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function LessonScreen() {
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
      {
        id: 'exercise1',
        title: 'מערכת השלד',
        type: 'choice' as 'choice',
        answers: ['עצמות', 'שרירים', 'עור', 'שיער'],
        correct: 0,
        question: 'מהו המרכיב העיקרי של מערכת השלד?',
      },
      {
        id: 'exercise2',
        title: 'מערכת השרירים',
        type: 'choice' as 'choice',
        answers: ['עצמות', 'שרירים', 'עור', 'שיער'],
        correct: 1,
        question: 'מהו המרכיב העיקרי של מערכת השרירים?',
      },
    ],
  };

  const [heartCount, setHeartCount] = React.useState(5);

  const [step, setStep] = React.useState(0);
  const [progressPercent, setProgressPercent] = React.useState(0);
  const [endLesson, setEndLesson] = React.useState(false);
  let exercise = lesson.exercises[step] as Exercise;

  const handleStepChange = (isCorrect: boolean) => {
    if (!isCorrect) {
      // Use a functional state update to ensure the latest heart count is used
      setHeartCount((prevHeartCount) => {
        const newHeartCount = prevHeartCount - 1;
        if (newHeartCount <= 0) {
            setEndLesson(true);
            return 0; // Prevent negative heart counts
        }
        return newHeartCount;
      });
      return;
    }
  
    // Proceed to the next step if the answer is correct
    const newStep = step + 1;
    setProgressPercent(newStep / lesson.exercises.length);
  
    if (newStep >= lesson.exercises.length) {
      // Lesson completed
      setTimeout(() => {
        setEndLesson(true);
      }, 1000);
    } else {
      setStep(newStep);
    }
  };
  
  return (
    <View style={styles.container}>
      {!endLesson ? (
        <>
          <LessonBar progress={progressPercent} heartCount={heartCount} />
          {exercise.type === 'choice' ? (
            <ChoiceExercise
              onAnswerSelected={handleStepChange}
              exercise={exercise}
            />
          ) : exercise.type === 'fill' ? (
            <FillExercise   // Add FillExercise component
            //   onAnswerSelected={handleStepChange}
                // exercise={exercise}
            />
            ) : null}
        </>
      ) : (
        <FinishScreen heartsReamings={heartCount}/>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
