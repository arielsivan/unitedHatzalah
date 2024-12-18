import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

interface EventProps {
  id: string;
  name: string;
  description: string;
  location: string;
  emoji: string;
}

const SingleEvent: React.FC<EventProps> = ({
  id,
  name,
  description,
  location,
  emoji,
}) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={() => router.push(`/event/information/${id}`)}
    >
      <Text style={styles.name}>{name}</Text>
      <View style={styles.line} />
      <Text style={styles.description}>{description}</Text>
      <View style={styles.line} />
      <View style={styles.bottomContainer}>
        <Text style={styles.emoji}>{emoji}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  line: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 5,
  },
  description: {
    fontSize: 16, // Increased font size
    color: "#666",
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  emoji: {
    fontSize: 20,
    marginRight: 10,
  },
  location: {
    fontSize: 14,
    color: "#666",
    flex: 1,
  },
});

export default SingleEvent;
