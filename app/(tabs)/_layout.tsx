import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs screenOptions={{
        headerShown:false,
    }}>
        <Tabs.Screen name="index" 
            options={{
                title : 'Index',
                tabBarIcon : () => 
                    <Ionicons name="book" size={24} color="black" />
            }}
        />
        <Tabs.Screen name="explore" 
            options={{
                title : 'Explore',
                tabBarIcon : () => 
                    <Ionicons name="information" size={24} color="black" />
            }}
        />
        <Tabs.Screen name="learning" 
            options={{
                title : 'Duo',
                tabBarIcon : () => 
                    <MaterialCommunityIcons name="bird" size={24} color="black" />
            }}
        />
    </Tabs>
  );
}
