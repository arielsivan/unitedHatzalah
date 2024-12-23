import { Colors } from '@/constants/Colors';
import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function DialogBalloon ({ text, position = 'left', characterUrl } : any) {
  return (
    <View style={[styles.container, position === 'right' && styles.containerRight]}>
      <View style={styles.avatarContainer}>
        <Image 
          source={characterUrl} 
          style={styles.avatar}
          resizeMode="cover"
        />
      </View>
      
      <View style={[
        styles.balloon, 
        position === 'left' ? styles.balloonLeft : styles.balloonRight
      ]}>
        <Text style={[styles.text, position === 'right' && {color : Colors.white}]}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    maxWidth: '70%',
    alignSelf: 'flex-start',
    marginVertical: 8,
  },
  containerRight: {
    flexDirection: 'row-reverse',
    alignSelf: 'flex-end',
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  balloon: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  balloonLeft: {
    borderTopLeftRadius: 0,
  },
  balloonRight: {
    borderTopRightRadius: 0,
    backgroundColor: Colors.secondary,
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});