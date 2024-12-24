import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

export default function emergency() {
  const router = useRouter();

  let button = [
    { title: 'CPR' },
    { title: 'Choking' },
    { title: 'Burns' },
    { title: 'Bleeding' },
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
