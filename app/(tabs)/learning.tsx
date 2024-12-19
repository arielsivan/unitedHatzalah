import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import DuoRoundButton from '@/components/DuoRoundButton';
import mockItems from '@/mocks/items';

export default function Learning() {
  const items = mockItems;

  return (
    <View className="flex-1 bg-transparent">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          margin: 10,
          marginTop: 20,
          paddingBottom: 50,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {items.map((item, key) => {
          const step = 70;
          const snakeMargin = step * Math.abs((key % 4) - 2) - step;

          return (
            <View
              key={key}
              style={{
                marginLeft: snakeMargin,
              }}
            >
              <DuoRoundButton
                text={item.emoji}
                backgroundColor={item.background}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
