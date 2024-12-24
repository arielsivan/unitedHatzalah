import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import MockCards from '@/mocks/community';
import Qcard from '@/components/communityCards/Qcard';
import { ScrollView } from 'react-native-gesture-handler';

export default function Community() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {MockCards.map((card) => (
          <Qcard key={card.id} title={card.title} />
        ))}
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      padding: 10,
    },

    
  });
