import { View, Image } from 'react-native';
import React from 'react';

interface EffyProps {
  feeling: string;
  size?: number;
}

const images: { [key: string]: any } = {
  happy: require('@/assets/images/Effy/happy.png'),
  sad: require('@/assets/images/Effy/sad.png'),
  worried: require('@/assets/images/Effy/worried.png'),
  excited: require('@/assets/images/Effy/excited.png'),
};

export default function Effy({ feeling = 'happy', size = 200 }: EffyProps) {
  return (
    <View>
      <Image
        source={images[feeling] || images['happy']}
        style={{ width: size, height: size }}
      />
    </View>
  );
}
