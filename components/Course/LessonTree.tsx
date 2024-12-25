import { View, ScrollView } from 'react-native';
import React from 'react';
import { Course } from '@/types/data';
import LessonNode from './LessonNode';

export default function LessonTree({
    lessons,
    id
} : Course) {

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
            <LessonNode {...item} courseId={id} />
          </View>
        );
      })}
    </ScrollView>
  );
}
