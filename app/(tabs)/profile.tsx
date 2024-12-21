import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Colors } from '../../constants/Colors';
import { Badge } from '@/types/data';
import { useAuthStore } from '@/stores/authStore';

export default function ProfileScreen() {
    const user = useAuthStore((state) => state.user);
    
  const badges: Badge[] = [
    { id: 1, title: 'First Lesson', icon: 'star-outline' },
    { id: 2, title: '5 Day Streak', icon: 'flame-outline' },
    { id: 3, title: 'Completed Basics', icon: 'trophy-outline' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Avatar Section */}
      <View style={styles.avatarContainer}>
        <Ionicons
          name="person-circle-outline"
          size={220}
          color={Colors.accent}
        />
      </View>

      {/* User Information */}
      <Text style={styles.username}>{user?.name || 'Guest'}</Text>
      <Text style={styles.email}>{user?.email || 'Not logged in'}</Text>
      <Text style={styles.email}>Streak: {user?.streak || 0}</Text>
      <Text style={styles.email}>Hearts: {user?.hearts || 0}</Text>
      <Text style={styles.email}>Gems: {user?.gems || 0}</Text>

      {/* Badges Section */}
      <View style={styles.badgesContainer}>
        <Text style={styles.sectionTitle}>My Badges:</Text>
        <View style={styles.badgesList}>
          {(user?.badges || badges).map((badge) => (
            <View key={badge.id} style={styles.badgeItem}>
              <Ionicons
                name={badge.icon as any}
                size={36}
                color={Colors.accent}
              />
              <Text style={styles.badgeTitle}>{badge.title}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  avatarContainer: {
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#ccc',
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  email: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  badgesContainer: {
    width: '100%',
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center',
    color: Colors.text,
  },
  badgesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  badgeItem: {
    alignItems: 'center',
    margin: 10,
  },
  badgeTitle: {
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
  },
});
