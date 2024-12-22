import { View, ScrollView, StyleSheet } from "react-native";
import React from "react";
import SingleEvent from "@/components/Event/singleEvent";
import events from "@/mocks/event";

export default function EventsScreen() {
  const myEvents = events;

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {myEvents.map((event) => (
        <SingleEvent
          key={event.id}
          id={event.id}
          name={event.name}
          description={event.description}
          location={event.location}
          emoji={event.emoji}
          date={event.date}
          time={event.time}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 10,
    paddingTop : 50,
  },
});