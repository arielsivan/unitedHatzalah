import React, { useEffect, useState } from 'react';
import { Stack } from 'expo-router';
import 'react-native-reanimated';
import { useAuthStore } from '@/stores/authStore';
import AppLoading from '@/components/AppLoading';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '@/configs/FirebaseConfig';
import Call from '@/components/Call';

export default function RootLayout() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [callId, setCallId] = useState('');
  let user = useAuthStore((state) => state.user);

  useEffect(() => {
    if (!user) return; // Ensure user is defined before setting up the listener
  
    const callsRef = collection(db, 'calls');
  
    const unsubscribe = onSnapshot(callsRef, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          const newCall = change.doc.data();
          console.log('New call:', newCall);
  
        const hasBadge = (user.badges || []).some((badge) => badge.title  === newCall.skill);
        if (!hasBadge) return;

          // Set modal message and callId
          const message = `קריאה חדשה לעזרה ${newCall.skill || ''} במיקום: ${newCall.location || 'לא ידוע'}`;
          setModalMessage(message);
  
          const callIdMap : any = {
            Fire: '1',
            CPR: '11',
            Snakes: '4',
            Stroke: '2',
          };
          setCallId(callIdMap[newCall.skill] || ''); // Fallback to an empty string if skill is unknown
  
          // Show the modal
          setModalVisible(true);
        }
      });
    });
  
    return () => unsubscribe(); // Clean up listener on unmount
  }, [user]); // Add 'user' to dependency array
  
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

      {/* Render the Call modal */}
      <Call visible={modalVisible} setVisible={setModalVisible} message={modalMessage} id={callId} />
    </>
  );
}
