import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import mockItems from '@/mocks/items'; // Ensure this path is correct
import { CustomButton } from '@/components/CustomButton'; // Ensure this path is correct

interface Props{
    //add props here
}

export default function LessonTree({}: Props) {
  const items = mockItems;
  
    return (
      <ScrollView
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
              <CustomButton
                title={item.emoji}
                backgroundColor={item.background}
                rounded={true}
              />
            </View>
          );
        })}
      </ScrollView>
    );
}