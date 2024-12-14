import { Tabs } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/Colors';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabLayout() {

  return (
    <Tabs screenOptions={{
        headerShown:false,
    }}>
        <Tabs.Screen name="index" 
            options={{
                title : 'Index',
                tabBarIcon : () => 
                    <Ionicons name="book" size={24} color={Colors.accent} />
            }}
        />
        <Tabs.Screen name="learning" 
            options={{
                title : 'Duo',
                tabBarIcon : () => 
                    <MaterialCommunityIcons name="bird" size={24} color={Colors.accent} />
            }}
        />
    </Tabs>
  );
}
