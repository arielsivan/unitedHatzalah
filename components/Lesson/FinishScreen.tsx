import { CustomButton } from '@/components/ui/CustomButton';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Effy from '../ui/Effy';
import StatsBox from './StatsBox';
import { useAuthStore } from '@/stores/authStore';

interface FinishScreenProps {
  heartsReaming?: number;
  totalXP?: number;
  committed?: string;
  id: string;
}

export default function FinishScreen({
  heartsReaming = 5,
  totalXP = 15,
  committed = '2 דקות',
  id,
}: FinishScreenProps) {
  const router = useRouter();
  const success = heartsReaming > 0;
  const updateProgress = useAuthStore((state) => state.updateProgress);
  
  if (success && id) updateProgress(id);

    return (
      <View style={styles.container}>
        <Effy feeling={success ? 'happy' : 'sad'} />

        {/* Text content */}
        <Text style={styles.titleText}>
          {success ? 'כל הכבוד!' : 'נסה שוב!'}
        </Text>
        <Text style={styles.subText}>
          {success
            ? 'כל שיעור מקרב אותך בדרך להצלת חיים!'
            : 'הפעם לא הצלחת, נסה שוב בפעם הבאה!'}
        </Text>

        {/* Stats container */}
        <View style={styles.statsContainer}>
          <StatsBox title='סה"כ נקודות' text={totalXP} icon="⚡️" />
          <StatsBox title="זמן" text={committed} icon="⏰" />
          <StatsBox
            title={success ? 'מצוין' : 'אולי בפעם הבאה'}
            text={(heartsReaming / 5) * 100 + '%'}
            icon="🎯"
          />
        </View>

        {/* Continue button */}
        <CustomButton title="המשך" handlePress={() => router.push('/(tabs)')} />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
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
});
