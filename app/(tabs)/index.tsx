import React, { useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';
import LessonTree from '@/components/Course/LessonTree';
import ScrollToTopContainer from '@/components/ui/ScrollToTopContainer';
import useCourseStore from '@/stores/courseStore'; // Import your Zustand store
import AppLoading from '@/components/AppLoading';
import AppError from '@/components/AppError';
import NoItem from '@/components/NoItem';
import CourseCard from '@/components/Course/CourseCard';

export default function Learning() {
  const { courses, loading, error, fetchAllCourses } = useCourseStore();

  useEffect(() => {
    // Fetch the course when the component mounts
    fetchAllCourses();
  }, [fetchAllCourses]);

  if (loading) return <AppLoading />;
  if (error) return <AppError error={error} />;
  if (!courses) return <NoItem text={'אין קורס כזה כרגע'} />;

  return (
    <ScrollToTopContainer>
      {courses.map((course) => (
        <CourseCard {...course} key={course.id} />
      ))}
    </ScrollToTopContainer>
  );
}
