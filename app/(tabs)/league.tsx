import { mockLeaderboardData } from '@/mocks/league';
import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

type Item = {
  name: string;
  points: number;
};

export default function Leaderboard() {
  const leaderboardData: Item[] = mockLeaderboardData;

  const renderItem = ({ item, index }: { item: Item; index: number }) => (
    <View style={styles.itemContainer}>
      {index === 0 ? (
        <Text style={styles.rank}>🥇</Text>
      ) : index === 1 ? (
        <Text style={styles.rank}>🥈</Text>
      ) : index === 2 ? (
        <Text style={styles.rank}>🥉</Text>
      ) : (
        <Text style={styles.rank}>{index + 1}</Text>
      )}
      <Image
        source={{ uri: 'https://robohash.org/a' + index }}
        style={styles.avatar}
      />
      <View style={styles.userInfo}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.points}>{item.points} XP</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={leaderboardData}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
      contentContainerStyle={styles.container}
      ListHeaderComponent={<Text style={styles.header}> לוח תוצאות שבועי 🏆</Text>}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop : 50,
    backgroundColor: '#F0F8FF',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#4CAF50',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  rank: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginHorizontal: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 15,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  points: {
    fontSize: 14,
    color: '#757575',
  },
});
