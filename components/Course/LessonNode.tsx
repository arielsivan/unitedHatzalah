// import { View, Text } from 'react-native';
import React from 'react';
import { CustomButton } from '../ui/CustomButton';
import { useRouter } from 'expo-router';

interface Props {
    icon : string;
    color : string;
    id : string;
    courseId : string;
    disabled: boolean;
}

export default function LessonNode({
    icon,
    color,
    id,
    courseId,
    disabled,
}: Props) {
    const router = useRouter();

  return (
    <CustomButton
      title={icon}
      backgroundColor={color}
      rounded={true}
      disabled={disabled}
      handlePress={() => router.push(`/course/${courseId}/${id}`)}
    />
  );
}
