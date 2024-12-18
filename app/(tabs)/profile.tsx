<<<<<<< HEAD
// פרופיל - אוריאן כתב
=======
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "../../constants/Colors";
import { auth } from "../../configs/FirebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, get } from "firebase/database";

export default function ProfileScreen() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
  });

  // const [userData, setUserData] = useState({
  //   username: "Guest",
  //   email: "Not logged in",
  // });

  const badges = [
    // change later to the user's badges
    { id: 1, title: "First Lesson", icon: "star-outline" },
    { id: 2, title: "5 Day Streak", icon: "flame-outline" },
    { id: 3, title: "Completed Basics", icon: "trophy-outline" },
  ];

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // Fetch user data from Firebase Database
  //       const db = getDatabase();
  //       const userRef = ref(db, `users/${user.uid}`);
  //       get(userRef)
  //         .then((snapshot) => {
  //           if (snapshot.exists()) {
  //             const data = snapshot.val();
  //             setUserData({
  //               username: data.username || "Unknown User",
  //               email: data.email || "No email provided",
  //             });
  //           } else {
  //             console.log("No data available for this user");
  //             setUserData({
  //               username: "Unknown User",
  //               email: user.email || "No email provided",
  //             });
  //           }
  //         })
  //         .catch((error) => {
  //           console.error("Error fetching user data:", error);
  //           setUserData({
  //             username: "Error fetching username",
  //             email: user.email || "No email provided",
  //           });
  //         });
  //     } else {
  //       setUserData({
  //         username: "Guest",
  //         email: "Not logged in",
  //       });
  //     }
  //   });

  //   return () => unsubscribe();
  // }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData({
          username: user.displayName || "Unknown User", // Fix: access user.displayName safely
          email: user.email || "No email provided", // Fix: safely access user.email
        });
      } else {
        setUserData({
          username: "Guest",
          email: "Not logged in",
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
      <Text style={styles.username}>{userData.username}</Text>
      <Text style={styles.email}>{userData.email}</Text>

      {/* Badges Section */}
      <View style={styles.badgesContainer}>
        <Text style={styles.sectionTitle}>My Badges:</Text>
        <View style={styles.badgesList}>
          {badges.map((badge) => (
            <View key={badge.id} style={styles.badgeItem}>
              <Ionicons name={badge.icon} size={36} color={Colors.accent} />
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
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  avatarContainer: {
    alignItems: "center",
    width: "100%",
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "#ccc",
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  email: {
    fontSize: 16,
    color: "gray",
    marginBottom: 20,
  },
  badgesContainer: {
    width: "100%",
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "center",
    color: Colors.text, // change later the light and dark mode
  },
  badgesList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  badgeItem: {
    alignItems: "center",
    margin: 10,
  },
  badgeTitle: {
    marginTop: 5,
    fontSize: 14,
    textAlign: "center",
  },
});
>>>>>>> origin/someAddings
