import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

export default function emergency() {
  const router = useRouter();

  let button = [
    { title: 'CPR', image: require('../assets/cpr.png') },
    { title: 'Choking', image: require('../assets/choking.png') },
    { title: 'Burns', image: require('../assets/burns.png') },
    { title: 'Bleeding', image: require('../assets/bleeding.png') },
  ];

  return (
    <View>
      {button.map((item, index) => {
        return (
          <View key={index}>
            <Pressable
            //  onPress={() => router.push(`/emergency/${item.title}`)}
            >
              <Text>{item.title}</Text>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
}
