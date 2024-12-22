import { Tabs } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/Colors';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'ראשי',
          tabBarIcon: () => (
            <Ionicons name="home" size={24} color={Colors.accent} />
          ),
        }}
      />
      <Tabs.Screen
        name="league"
        options={{
          title: 'ליגה',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="trophy"
              size={24}
              color={Colors.accent}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'פרופיל',
          tabBarIcon: () => (
            <Ionicons name="person" size={24} color={Colors.accent} />
          ),
        }}
      />
      <Tabs.Screen
        name="events"
        options={{
          title: 'אירועים',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="car"
              size={24}
              color={Colors.accent}
            />
          ),
        }}
      />
    </Tabs>
  );
}
