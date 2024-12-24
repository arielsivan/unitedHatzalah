import LessonTree from '@/components/Course/LessonTree';
import { mockCourses } from '@/mocks/courses';
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const CourseDetails = () => {
  const { courseId } = useLocalSearchParams();


  const course = mockCourses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Course not found!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{course.title}</Text>
      <LessonTree lessons={course.lessons} />
      
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
  },
  listContainer: {
    paddingBottom: 20,
  },
  lessonCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  lessonIcon: {
    fontSize: 32,
    marginRight: 15,
  },
  lessonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  lessonDescription: {
    fontSize: 14,
    color: '#FFF',
    marginTop: 5,
  },
  errorText: {
    fontSize: 18,
    color: '#FF0000',
    textAlign: 'center',
  },
});

export default CourseDetails;
