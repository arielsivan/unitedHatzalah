import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function BackArrow() {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.back()}
      style={{ alignSelf: 'flex-end' }}
    >
      <Ionicons name="arrow-forward" size={24} color="black" />
    </TouchableOpacity>
  );
}
