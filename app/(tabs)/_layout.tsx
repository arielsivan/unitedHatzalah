import { Tabs } from 'expo-router';
import React from 'react';
import { I18nManager } from 'react-native';

import { Colors } from '@/constants/Colors';
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';
import { useAuthStore } from '@/stores/authStore';
import UserStats from '@/components/Header/UserStatsBar';

// Ensure the layout is RTL
I18nManager.forceRTL(true);

export default function TabLayout() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <>
      {isAuthenticated ? <UserStats /> : null}
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: Colors.accent,
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: Colors.white },

          // Align items to have label before icon
          tabBarItemStyle: {
            flexDirection: 'row', // Set to 'row' to have label first in RTL
            alignItems: 'center',
          },
          tabBarLabelStyle: {
            marginRight: 6, // Space between label and icon
            fontSize: 12,
          },
        }}
      >
        {/* אירועים (Events) Tab */}
        <Tabs.Screen
          name="events"
          options={{
            title: 'אירועים',
            tabBarIcon: ({ color }) => (
              <Ionicons name="calendar" size={24} color={color} />
            ),
          }}
        />

        {/* קהילה (Community) Tab */}
        <Tabs.Screen
          name="community"
          options={{
            title: 'קהילה',
            tabBarIcon: ({ color }) => (
              <Ionicons name="people" size={24} color={color} />
            ),
          }}
        />
        {/* פרופיל (Profile) Tab */}
        <Tabs.Screen
          name="profile"
          options={{
            title: 'פרופיל',
            tabBarIcon: ({ color }) => (
              <Ionicons name="person" size={24} color={color} />
            ),
          }}
        />

        {/* ליגה (League) Tab */}
        <Tabs.Screen
          name="league"
          options={{
            title: 'ליגה',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="trophy" size={24} color={color} />
            ),
          }}
        />

        {/* ראשי (Home) Tab */}
        <Tabs.Screen
          name="index"
          options={{
            title: 'ראשי',
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" size={24} color={color} />
            ),
          }}
        />
        {/* SOS (emergency) Tab */}
        <Tabs.Screen
          name="emergency"
          options={{
            title: 'ראשי',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="sos" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
