import React, { useEffect } from "react";
import { StyleSheet, View, ActivityIndicator, Text } from "react-native";
import LessonTree from "@/components/Course/LessonTree";
import ScrollToTopContainer from "@/components/ui/ScrollToTopContainer";
import useCourseStore from "@/stores/courseStore"; // Import your Zustand store
import AppLoading from "@/components/AppLoading";
import AppError from "@/components/AppError";
import NoItem from "@/components/NoItem";
import Call from "@/components/Call";

export default function Learning() {
  const courseId = "syXFUZcIneOmqaqGLBsA"; // ID of the course to fetch
  const { course, loading, error, fetchCourse } = useCourseStore();

  useEffect(() => {
    // Fetch the course when the component mounts
    fetchCourse(courseId);
  }, [courseId, fetchCourse]);

  if (loading) return <AppLoading />;
  if (error) return <AppError error={error} />;
  if (!course) return <NoItem text={'אין קורס כזה כרגע'} />;

  return (
    <ScrollToTopContainer>
      <LessonTree {...course} />
      
    </ScrollToTopContainer>
  );
}
