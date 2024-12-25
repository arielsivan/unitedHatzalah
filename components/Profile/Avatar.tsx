import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

interface AvatarProps {
    avatar: string;
    setModalVisible: (visible: boolean) => void;
}


export default function Avatar({
    avatar,
    setModalVisible,
}: AvatarProps) {
  return (
    <View style={styles.avatarContainer}>
      <Image
        source={{
          uri:
            avatar || `https://robohash.org/default`,
        }}
        style={styles.avatar}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
        activeOpacity={0.7}
      >
        <Ionicons name="add-circle" size={30} color={Colors.accent} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
    height: 200,
    justifyContent: 'flex-end',
    backgroundColor: Colors.secondary,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 0,
  },
  
  addButton: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // For Android shadow
  },
});
