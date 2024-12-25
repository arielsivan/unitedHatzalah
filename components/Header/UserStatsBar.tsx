import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FlameStreak from '@/components/Header/Streak';
import DiamondIcon from '@/components/Header/Gems';
import { Heart } from '@/components/Header/Hearts'; // Import the Heart component
import { Colors } from '@/constants/Colors';
import { useAuthStore } from '@/stores/authStore';

interface UserStatsProps {
  flameCount: number;
  diamondCount: number;
  heartCount: number;
}

export default function UserStats({
  flameCount,
  diamondCount,
  heartCount,
}: UserStatsProps) {
  const user = useAuthStore((state) => state.user);

  // Get user stats from the user data (or default if not available)
  flameCount = user?.streak || 0; // Default streak value if not available
  diamondCount = user?.gems || 0; // Default gems value if not available
  heartCount = user?.hearts || 0; // Default hearts value if not available


  const diffInMs = Date.now() - flameCount;
  flameCount = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  return (
    <View style={styles.container}>
      {/* Flame Streak */}
      <View style={styles.statItem}>
        <FlameStreak size={30} />
        <Text style={styles.statText}>{flameCount}</Text>
      </View>

      {/* Diamond */}
      <View style={styles.statItem}>
        <DiamondIcon size={30} />
        <Text style={styles.statText}>{diamondCount}</Text>
      </View>

      {/* Heart */}
      <View style={styles.statItem}>
        <Heart size={30} />
        <Text style={styles.statText}>{heartCount}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    paddingTop: 30,
    backgroundColor: Colors.orange,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    marginLeft: 5,
    fontSize: 18,
    color: Colors.white,
  },
});
