import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import React from 'react';
import { useAuthStore } from '@/stores/authStore';
import AppLoading from '@/components/AppLoading';
import UserStats from '@/components/Header/UserStatsBar';

export default function RootLayout() {
  const loading = useAuthStore((state) => state.loading);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (loading) {
    return <AppLoading />;
  }

  return (
    <>
      {isAuthenticated ? <UserStats/> : null}
      <Stack screenOptions={{headerShown : false}}>
        <Stack.Screen name="(tabs)"/>
        <Stack.Screen name="+not-found" />
      </Stack>
    </>
  );
}
