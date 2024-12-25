import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';

interface StatsBoxProps {
  title: string;
  text: any;
  icon: string;
}

export default function StatsBox({ title, text, icon }: StatsBoxProps) {
  return (
    <View style={styles.statBox}>
      <Text style={styles.statLabel}>{title}</Text>
      <View style={styles.statContent}>
        <Text style={styles.statValue}>{text}</Text>
        <Text style={styles.icon}>{icon}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    marginRight: 5,
  },
  icon: {
    fontSize: 16,
  },
});
