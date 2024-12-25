import { CustomButton } from '@/components/CustomButton';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import Effy from '../ui/Effy';

export default function FinishScreen ({
  heartsReamings = 5,
  minutes = 291,
  totalXP = 15,
  committed = '4h',
}) {
  // Animation setup
  const bounceAnim = new Animated.Value(0);
  const fireworksAnim = new Animated.Value(0);
  const router = useRouter();

  useEffect(() => {
    // Character bounce animation
    Animated.spring(bounceAnim, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();

    // Fireworks fade animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(fireworksAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(fireworksAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  return (
    <View style={styles.container}>
        <Effy feeling='sad'/>

      {/* Text content */}
      <Text style={styles.titleText}>
        {heartsReamings > 0 ? 'כל הכבוד!' : 'נסה שוב!'}
      </Text>
      <Text style={styles.subText}>
        This lesson took over {minutes} minutes. Way to power through!
      </Text>

      {/* Stats container */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>TOTAL XP</Text>
          <View style={styles.statContent}>
            <Text style={styles.xpIcon}>⚡️</Text>
            <Text style={styles.statValue}>{totalXP}</Text>
          </View>
        </View>

        <View style={styles.statBox}>
          <Text style={styles.statLabel}>COMMITTED</Text>
          <View style={styles.statContent}>
            <Text style={styles.timeIcon}>⏱</Text>
            <Text style={styles.statValue}>{committed}</Text>
          </View>
        </View>

        <View style={styles.statBox}>
          <Text style={styles.statLabel}>GREAT</Text>
          <View style={styles.statContent}>
            <Text style={styles.targetIcon}>🎯</Text>
            <Text style={styles.statValue}>{(heartsReamings / 5) * 100}%</Text>
          </View>
        </View>
      </View>

      {/* Continue button */}
      <CustomButton title="המשך" handlePress={() => router.push('/(tabs)')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  owlText: {
    fontSize: 40,
  },
  titleText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 10,
  },
  subText: {
    fontSize: 18,
    color: Colors.orange,
    textAlign: 'center',
    marginBottom: 30,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 30,
  },
  statBox: {
    backgroundColor: Colors.secondary,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: '30%',
  },
  statLabel: {
    color: Colors.white,
    fontSize: 12,
    marginBottom: 5,
  },
  statContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statValue: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  xpIcon: {
    fontSize: 16,
  },
  timeIcon: {
    fontSize: 16,
    color : Colors.white,
  },
  targetIcon: {
    fontSize: 16,
  },
});
