import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Colors } from '../../constants/Colors';
import { auth, db } from '../../configs/FirebaseConfig';
import { onAuthStateChanged, User } from 'firebase/auth';
import { getDatabase, ref, get } from 'firebase/database';
import { Badge, UserProf } from '@/types/data';
import { doc, getDoc } from 'firebase/firestore';

export default function ProfileScreen() {
  const badges: Badge[] = [
    // change later to the user's badges
    { id: 1, title: 'First Lesson', icon: 'star-outline' },
    { id: 2, title: '5 Day Streak', icon: 'flame-outline' },
    { id: 3, title: 'Completed Basics', icon: 'trophy-outline' },
  ];

  const [userData, setUserData] = useState<UserProf>({
    name: '',
    email: '',
    gems: 0,
    hearts: 0,
    streak: 0,
    badges: [],
  });

  const fetchUserData = async (userId: string) => {
    try {
      // Reference the document in the 'users' collection with the specific userId
      const docRef = doc(db, 'users', userId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // Document data is available
        console.log('User data:', docSnap.data());
        const usr: UserProf = docSnap.data() as UserProf;
        return usr; // Return the document data
      } else {
        // Document does not exist
        console.log('No such document!');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchUserData(user.uid).then((userdata) => {
          if (userdata) {
            console.log('usr:' + userdata.gems);

            setUserData({
              name: userdata.name || 'Unknown User', // Fix: access user.displayName safely
              email: userdata.email || 'No email provided', // Fix: safely access user.email
              gems: userdata.gems,
              hearts: userdata.hearts,
              streak: userdata.streak,
              badges: badges,
            });
          }
        });
      } else {
        setUserData({
          name: 'Guest',
          email: 'Not logged in',
          gems: 0,
          hearts: 0,
          streak: 0,
          badges: [],
        });
      }
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

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

      {/* Username and Email */}
      <Text style={styles.username}>{userData.name}</Text>
      <Text style={styles.email}>{userData.email}</Text>
      <Text style={styles.email}>streak : {userData.streak}</Text>
      <Text style={styles.email}>hearts : {userData.hearts}</Text>
      <Text style={styles.email}>gems : {userData.gems}</Text>

      {/* Badges Section */}
      <View style={styles.badgesContainer}>
        <Text style={styles.sectionTitle}>My Badges:</Text>
        <View style={styles.badgesList}>
          {userData.badges ? (
            userData.badges.map((badge) => (
              <View key={badge.id} style={styles.badgeItem}>
                <Ionicons
                  name={badge.icon as any}
                  size={36}
                  color={Colors.accent}
                />
                <Text style={styles.badgeTitle}>{badge.title}</Text>
              </View>
            ))
          ) : (
            <Text style={{ fontSize: 20 }}>No badges yet</Text>
          )}
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
    color: Colors.text, // change later the light and dark mode
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
