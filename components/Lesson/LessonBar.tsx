import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Heart } from '@/components/Header/Hearts'; // Import the Heart component
import { Colors } from '@/constants/Colors';
import { Cross } from './Cross';
import ProgressBar from './ProgressBar';
import { useRouter } from 'expo-router';

interface LessonBarProps {
  heartCount?: number;
  progress?: number;
}

export default function LessonBar({
  heartCount = 2,
  progress = 0.5,
}: LessonBarProps) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Cross Streak */}
      <View style={styles.statItem}>
        <TouchableOpacity onPress={() => router.back()}>
          <Cross size={20} />
        </TouchableOpacity>
      </View>

      {/* Diamond */}
      <View style={styles.statItem}>
        <ProgressBar progress={progress} />
      </View>

      {/* Heart */}
      <View style={styles.statItem}>
        <Text style={styles.statText}>{heartCount}</Text>
        <Heart size={30} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statText: {
    marginLeft: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.orange,
  },
});
