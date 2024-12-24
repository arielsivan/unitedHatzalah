import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { CustomButton } from '@/components/ui/CustomButton'; // Ensure this path is correct
import { Lesson } from '@/types/data';
import { useRouter } from 'expo-router';

interface Props{
    lessons?: Lesson[];
}

export default function LessonTree({
    lessons = [],
}: Props) {
    const router = useRouter();
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
        {lessons.map((item, key) => {
          const step = 70;
          const snakeMargin = step * Math.abs((key % 4) - 2) - step;
  
          return (
            <View
              key={item.id}
              style={{
                marginLeft: snakeMargin,
              }}
            >
              <CustomButton
                title={item.icon}
                backgroundColor={item.color}
                rounded={true}
                handlePress={() => router.push(`/course/lesson/${item.id}`)}
              />
            </View>
          );
        })}
      </ScrollView>
    );
}