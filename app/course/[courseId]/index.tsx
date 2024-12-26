import AppError from '@/components/AppError';
import AppLoading from '@/components/AppLoading';
import LessonTree from '@/components/Course/LessonTree';
import NoItem from '@/components/NoItem';
import BackArrow from '@/components/ui/BackArrow';
import useCourseStore from '@/stores/courseStore';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CourseDetails = () => {
  const { courseId } = useLocalSearchParams();

  const { course, loading, error, fetchCourse } = useCourseStore();

  useEffect(() => {
    // Fetch the course when the component mounts
    if (typeof courseId === 'string') {
      fetchCourse(courseId);
    }
  }, [courseId, fetchCourse]);

  if (loading) return <AppLoading />;
  if (error) return <AppError  error={error} />;
  if (!course) return <NoItem text={'אין קורס כזה כרגע'} />;

  return (
    <View style={styles.container}>
        <BackArrow />
      <Text style={styles.title}>{course.title}</Text>
      <LessonTree {...course} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7FB',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  }
});

export default CourseDetails;
