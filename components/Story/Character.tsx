import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const Character = ({ image } : any) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.characterImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10,
  },
  characterImage: {
    width: 100,
    height: 100,
  },
});

export default Character;
