import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import EmergencyCard from '@/components/Emergency/EmergencyCard';
import { useLocalSearchParams } from 'expo-router';
import { emergencyData, EmergencyInfo } from '@/mocks/emergencyData';

const EmergencyDetail: React.FC = () => {
  const { title } = useLocalSearchParams();

  const emergencyInfo: EmergencyInfo | undefined =
    emergencyData[title as string];

  if (!emergencyInfo) {
    return (
      <View style={styles.container}>
        <Text style={styles.notFoundText}>Emergency not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <EmergencyCard
        header={emergencyInfo.header}
        steps={emergencyInfo.steps}
      />
    </View>
  );
};

export default EmergencyDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notFoundText: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginTop: 50,
  },
});
