import AppLoading from '@/components/AppLoading';
import ChoiceExercise from '@/components/Lesson/Exercise/ChoiceExercise';
import FinishScreen from '@/components/Lesson/FinishScreen';
import LessonBar from '@/components/Lesson/LessonBar';
import useLessonStore from '@/stores/lessonStore';
import { Exercise, Lesson } from '@/types/data';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';

export default function LessonScreen() {
  const { fetchLesson } = useLessonStore();
  const { lessonId } = useLocalSearchParams() as { lessonId: string };

  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [heartCount, setHeartCount] = useState(5);
  const [step, setStep] = useState(0);
  const [progressPercent, setProgressPercent] = useState(0);
  const [endLesson, setEndLesson] = useState(false);

  useEffect(() => {
    if (!lessonId) return;
    const getLesson = async () => {
      const fetchedLesson = await fetchLesson(lessonId);
      if (fetchedLesson) setLesson(fetchedLesson);
    };
    getLesson();
  }, [lessonId]);

  if (!lesson) return <AppLoading />;

  const exercise = lesson.exercises[step] as Exercise;

  const handleStepChange = (isCorrect: boolean) => {
    if (!isCorrect) {
      setHeartCount((prevHeartCount) => {
        const newHeartCount = prevHeartCount - 1;

        if (newHeartCount <= 0) {
          setEndLesson(true);
          return 0;
        }
        return newHeartCount;
      });
      return;
    }

    const newStep = step + 1;
    setProgressPercent(newStep / lesson.exercises.length);

    if (newStep >= lesson.exercises.length) {
      setTimeout(() => {
        setEndLesson(true);
      }, 1000);
    } else {
      setTimeout(() => {
        setStep(newStep);
        // setEndLesson(true);
      }, 1000);
    }
  };

  return (
    <View style={styles.container}>
      {!endLesson ? (
        <>
          <LessonBar progress={progressPercent} heartCount={heartCount} />
          <ChoiceExercise
            onAnswerSelected={handleStepChange}
            exercise={exercise}
          />
        </>
      ) : (
        <FinishScreen heartsReaming={heartCount} id={lessonId} />
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
