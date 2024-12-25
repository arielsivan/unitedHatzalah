import AppLoading from '@/components/AppLoading';
import ChoiceExercise from '@/components/Lesson/Exercise/ChoiceExercise';
import FinishScreen from '@/components/Lesson/FinishScreen';
import LessonBar from '@/components/Lesson/LessonBar';
import { mockCourses } from '@/mocks/courses';
import { Exercise } from '@/types/data';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function LessonScreen() {
  const { courseId, lessonId } = useLocalSearchParams();
  const course = mockCourses.find((c) => c.id === courseId);
  const lesson = course?.lessons.find((l) => l.id === lessonId);

  if (!lesson) return <AppLoading />;

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
          {/* {exercise.type === 'text-to-text' && ( */}
          <ChoiceExercise
            onAnswerSelected={handleStepChange}
            exercise={exercise}
          />
          {/* )} */}
        </>
      ) : (
        <FinishScreen heartsReaming={heartCount} />
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
