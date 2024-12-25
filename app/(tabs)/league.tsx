import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import mockUsers from '@/mocks/users.json';
import ScrollToTopContainer from '@/components/ui/ScrollToTopContainer';
import { UserProf } from '@/types/data';
import { useAuthStore } from '@/stores/authStore';

export default function Leaderboard() {
  let users = mockUsers;

  const UserLeague = ({ item, index }: { item: UserProf; index: number }) => (
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
        source={{ uri: 'https://robohash.org/' + index }}
        style={styles.avatar}
      />
      <View style={styles.userInfo}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.points}>{item.xp} XP</Text>
      </View>
    </View>
  );

  return (
    <ScrollToTopContainer>
      <Text style={styles.header}> לוח תוצאות שבועי 🏆</Text>
      {users
        .sort((a, b) => b.xp - a.xp)
        .map((user, index) => (
          <UserLeague item={user} index={index} key={index} />
        ))}
    </ScrollToTopContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#F0F8FF',
    flexGrow: 1,
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
    flexDirection: 'row-reverse',
    alignItems: 'center',
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    boxShadow: '0px 4px 6px rgb(0, 0, 0, 0.1)',

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
