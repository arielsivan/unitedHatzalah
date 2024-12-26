import { View, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Course } from '@/types/data';
import LessonNode from './LessonNode';
import { useAuthStore } from '@/stores/authStore';
import Call from '../Call';

export default function LessonTree({
  lessons,
  id,
}: Course) {
  const user = useAuthStore((state) => state.user);

  const handleDisabled = (lessonId: string, key: number) => {
    if (!user) return true; // Disable if no user is logged in

    const isLessonCompleted = user.progress.includes(lessonId);

    if (key === 0) return false;

    const previousLesson = lessons[key - 1];
    const isPreviousLessonCompleted =
      previousLesson && user.progress.includes(previousLesson.id);

    return !(isLessonCompleted || isPreviousLessonCompleted);
  };

  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  useEffect(() => {
    // Add lessons to the completedLessons array with a delay of 10 seconds
    const timers: NodeJS.Timeout[] = [];
    user?.progress.forEach((lessonId) => {
      if (!completedLessons.includes(lessonId)) {
        const timer = setTimeout(() => {
          setCompletedLessons((prev) => [...prev, lessonId]);
        }, 10000); // 10-second delay
        timers.push(timer);
      }
    });

    // Cleanup timers on unmount
    return () => {
      timers.forEach(clearTimeout);
    };
  }, [user?.progress, completedLessons]);

  return (
    <ScrollView
      contentContainerStyle={{
        margin: 10,
        marginTop: 20,
        paddingBottom: 50,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {lessons.map((item, key) => {
        const step = 70;
        const snakeMargin = step * Math.abs((key % 4) - 2) - step;

        return (
          <View
            key={key}
            style={{
              marginLeft: snakeMargin,
            }}
          >
            <LessonNode
              {...item}
              courseId={id}
              disabled={handleDisabled(item.id, key)}
            />
            {/* Render Call only if the lesson is complete and after 10 seconds */}
            {completedLessons.includes(item.id) && <Call visible={true} />}
          </View>
        );
      })}
    </ScrollView>
  );
}
