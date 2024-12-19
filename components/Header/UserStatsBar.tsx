import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FlameStreak from '@/components/Header/Streak';
import DiamondIcon from '@/components/Header/Gems';
import { Heart } from '@/components/Header/Hearts'; // Import the Heart component
import { Colors } from '@/constants/Colors';

interface UserStatsProps {
  flameCount?: number;
  diamondCount?: number;
  heartCount?: number;
}

const UserStats: React.FC<UserStatsProps> = ({
  flameCount = 30, // Default flame count
  diamondCount = 500, // Default diamond count
  heartCount = 5, // Default heart count
}) => {
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
};

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

export default UserStats;
