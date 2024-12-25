import { Stack } from 'expo-router';
import 'react-native-reanimated';
import { useAuthStore } from '@/stores/authStore';
import AppLoading from '@/components/AppLoading';
import React, { useEffect } from 'react';
import { Alert, Platform, ToastAndroid } from 'react-native';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '@/configs/FirebaseConfig';

const listenForCPRCalls = () => {
  const callsRef = collection(db, 'calls');
  const cprCallsQuery = query(callsRef, where('type', '==', 'CPR Help'));

  const unsubscribe = onSnapshot(cprCallsQuery, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === 'added') {
        const newCall = change.doc.data();
        console.log('New CPR Help call:', newCall);

        const message = `CPR Help Call!\nLocation: ${newCall.location}\nPatient: ${newCall.patientName}\nContact: ${newCall.contactNumber}`;

        // Show a popup
        if (Platform.OS === 'android') {
          ToastAndroid.show(message, ToastAndroid.LONG);
        } else {
          Alert.alert('Emergency!', message);
        }
      }
    });
  });

  return unsubscribe; // Return unsubscribe to stop listening when needed
};

export default function RootLayout() {
  useEffect(() => {
    const unsubscribe = listenForCPRCalls();
    return () => unsubscribe(); // Clean up listener on unmount
  }, []);

  const loading = useAuthStore((state) => state.loading);

  if (loading) {
    return <AppLoading />;
  }

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="+not-found" />
      </Stack>
    </>
  );
}
