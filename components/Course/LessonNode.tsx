// import { View, Text } from 'react-native';
import React from 'react';
import { CustomButton } from '../ui/CustomButton';

interface Props {
  NodeText: string;
  NodeBackground?: string;
}

export default function LessonNode({ NodeText, NodeBackground }: Props) {
  return <CustomButton title={NodeText} backgroundColor={NodeBackground} rounded={true} />;
}
