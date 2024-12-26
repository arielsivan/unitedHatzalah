import { ReactNode } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

export default function PressableOption({
  index,
  children,
  handleAnswerPress,
  isSquare = false, // Add a prop to control square shape,
  correct = false,
}: {
  index: number;
  children: ReactNode;
  handleAnswerPress: (index: number) => void;
  isSquare?: boolean; // Optional prop with default value
  correct: boolean;
}) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        isSquare && styles.square, // Apply square style if isSquare is true
        pressed && [
          styles.pressed,
          correct ? styles.correct : styles.incorrect,
        ],
      ]}
      onPress={() => handleAnswerPress(index)}
    >
      <View style={[styles.content, isSquare && styles.squareContent]}>
        {children}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    borderRadius: 16,
    borderWidth: 2,
    borderBottomWidth: 6,
    borderColor: '#e5e5e5',
    paddingVertical: 12,
    paddingHorizontal: 16,
    margin: 10,
  },
  square: {
    width: '40%',
    height: '40%',
    aspectRatio: 1,
  },
  content: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  squareContent: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    backgroundColor: '#ddf4ff',
    borderColor: '#1cb0f6',
    transform: [{ translateY: 5 }],
  },
  incorrect: {
    backgroundColor: '#ffdddd',
    borderColor: '#f61c1c',
  },
  correct: {
    backgroundColor: 'rgb(187, 254, 138)',
    borderColor: '#58CC02',
  },
});
