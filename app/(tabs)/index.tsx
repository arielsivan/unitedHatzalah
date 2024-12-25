import React, { useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import LessonTree from '@/components/Course/LessonTree';
import ScrollToTopContainer from '@/components/ui/ScrollToTopContainer';
import { mockCourses } from '@/mocks/courses';

export default function Learning() {
  return (
    <ScrollToTopContainer>
      <LessonTree {...mockCourses[0]} />
    </ScrollToTopContainer>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 16,
    backgroundColor: '#fff', // Adjust as needed
  },
});
