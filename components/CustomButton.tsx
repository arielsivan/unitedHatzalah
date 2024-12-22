import { useColorAdjust } from '@/hooks/useColorAdjust';
import React from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';

interface Props {
  color?: string;
  backgroundColor?: string;
  title?: string;
  handlePress?: () => void;
}

export function CustomButton({
    color = '#FFFFFF',
    backgroundColor = '#007BFF',
    title = 'Button',
    handlePress = () => {},
}: Props) {

    const { lighten, darken } = useColorAdjust();
    const adjustedBackgroundColor = darken(backgroundColor, -20);
    const adjustColor = (color == backgroundColor) ?  darken(backgroundColor, 100) : color;
    return (
        <View>
            <Pressable
                style={({ pressed }) => [
                    styles.button,
                    pressed
                        ? styles.buttonPressed
                        : { boxShadow: '0 5px 0 ' + adjustedBackgroundColor },
                    { backgroundColor },
                ]}
                onPress={handlePress}
            >
                <Text style={[styles.text, { color : adjustColor }]}>{title}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    lineHeight: 32,
    margin: 10,
    fontWeight: 'bold',
  },
  button: {
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonPressed: {
    boxShadow: 'none',
    transform: 'translateY(5px)',
  },
});
