import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { EventProps } from '@/types/data';
import { CustomButton } from '../ui/CustomButton';
import { Colors } from '@/constants/Colors';

export default function SingleEvent(props: EventProps) {
  const { id, name, description, location, emoji, date, time } = props;
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.9}
      onPress={() => router.push(`/event/information/${id}`)}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.emoji}>{emoji}</Text>
        <Text style={styles.name}>{name}</Text>
      </View>

      <Text style={styles.line} />

      <Text style={styles.description}>{description}</Text>

      <Text style={styles.location}>{location} </Text>
      <Text style={styles.date}>{date} {time}</Text>

      <Text style={styles.line} />

      <CustomButton
        color="white"
        backgroundColor={Colors.blue}
        title="הרשמה לאירוע"
        handlePress={() => router.push(`/event/information/${id}`)}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 15,
    backgroundColor: '#FAFAFA',
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  headerContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    marginRight: 10,
    color: '#333',
  },
  line: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 8,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
    textAlign: 'right',
  },
  date: {
    fontSize: 14,
    color: '#999',
    marginTop: 8,
    textAlign: 'right',
  },
  location: {
    fontSize: 14,
    color: '#999',
    marginTop: 8,
    textAlign: 'right',
  },
  emoji: {
    fontSize: 24,
  },
});
