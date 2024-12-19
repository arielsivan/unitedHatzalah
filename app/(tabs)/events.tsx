import { View, Text } from "react-native";
import React from "react";
import SingleEvent from "@/components/Event/singleEvent";
import events from "@/mocks/event";
import { ScrollView } from "react-native-gesture-handler";

export default function EventsScreen() {
  const myEvents = events;

  return (
    <ScrollView>
      {myEvents.map((event) => (
        <SingleEvent
          key={event.id}
          id={event.id}
          name={event.name}
          description={event.description}
          location={event.location}
          emoji={event.emoji}
        />
      ))}
    </ScrollView>
  );
}
