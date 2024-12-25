import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import MockCards from '@/mocks/community';
import Qcard from '@/components/Community/Qcard';
import { ScrollView } from 'react-native-gesture-handler';
import ScrollToTopContainer from '@/components/ui/ScrollToTopContainer';

export default function Community() {
  return (
    <ImageBackground
      source={require('@/assets/background.jpg')} // עדכן את הנתיב לפי המיקום המדויק
      style={styles.background}
    >
      <View style={styles.overlay} />
      <ScrollToTopContainer contentContainerStyle={styles.container}>
        {MockCards.map((card,key) => (
          <Qcard key={key} title={card.title} id={card.id} />
        ))}
      </ScrollToTopContainer>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // מתאים את התמונה למסך
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // ממלא את כל המסך
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // צבע לבן עם שקיפות של 30%
  },
  container: {
    padding: 10,
  },
});
