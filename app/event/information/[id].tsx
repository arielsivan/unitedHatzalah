import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import events from '@/mocks/event';
import BackArrow from '@/components/BackArrow';
import MapsAPI from '@/components/MapsAPI'; // Assuming MapsAPI is located here

const EventInformation: React.FC = () => {
  const { id } = useLocalSearchParams();

  // Find the event with the matching ID
  const event = events.find((event) => event.id === id);

  if (!event) {
    return (
      <View style={styles.container}>
        <Text>Event not found</Text>
      </View>
    );
  }

  const { name, description, location, emoji } = event;

  const handleRegister = () => {
    // Handle event registration logic here
    alert('Registered for the event!');
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: name }} />
      <BackArrow />
      <Text style={styles.header}>{name}</Text>
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={styles.location}>{location}</Text>
      <Text style={styles.description}>{description}</Text>
      <MapsAPI address={location} />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  emoji: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  location: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default EventInformation;
