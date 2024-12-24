import { Stack } from 'expo-router';
import 'react-native-reanimated';

import React from 'react';
import { useAuthStore } from '@/stores/authStore';
import AppLoading from '@/components/AppLoading';

export default function RootLayout() {
  const loading = useAuthStore((state) => state.loading);

  if (loading) {
    return <AppLoading />;
  }

  return (
    <>
      <Stack screenOptions={{headerShown : false}}>
        <Stack.Screen name="(tabs)"/>
        <Stack.Screen name="+not-found" />
      </Stack>
    </>
  );
}
