import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { mockCourses } from '@/mocks/courses';
import { useRouter } from 'expo-router';

export default function Courses(){
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Courses</Text>
      <FlatList
        data={mockCourses}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.courseCard}
            onPress={() => router.push(`/course/${item.id}`)}
          >
            <Image source={{ uri: item.image }} style={styles.courseImage} />
            <Text style={styles.courseTitle}>{item.title}</Text>
            <Text style={styles.courseDescription}>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
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
  courseCard: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  courseImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#444',
  },
  courseDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});