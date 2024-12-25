import { useColorAdjust } from '@/hooks/useColorAdjust';
import React from 'react';
import { Pressable, StyleSheet, View, Text,Image } from 'react-native';

interface Props {
  color?: string;
  backgroundColor?: string;
  title?: string;
  rounded?: boolean;
  fontSize?: number;
  handlePress?: () => void;
  disabled?: boolean;
}

export function CustomButton({
  color = '#FFFFFF',
  backgroundColor = '#007BFF',
  title = 'Button',
  rounded = false,
  fontSize = 18,
  handlePress = () => {},
  disabled = false,
}: Props) {
  const { lighten, darken } = useColorAdjust();
  const adjustedBackgroundColor = darken(backgroundColor, 20);
  const adjustColor =
    color == backgroundColor ? darken(backgroundColor, 100) : color;
  return (
    <View style={{ width: '100%' }}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && !disabled
            ? styles.buttonPressed
            : { boxShadow: '0 5px 0 ' + adjustedBackgroundColor },
          {
            backgroundColor: disabled
              ? lighten(backgroundColor, 50)
              : backgroundColor,
          },
          rounded && styles.rounded,
          disabled && styles.disabled,
        ]}
        onPress={!disabled ? handlePress : undefined}
        disabled={disabled}
      >
        {title.endsWith('.png') ? (
            <Image
              source={{ uri: title }}
                style={{ width: 40, height: 40 }}
            />
        ) : (
        <Text style={[styles.text, { color: adjustColor, fontSize: fontSize }]}>
          {title}
        </Text>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
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
  rounded: {
    borderRadius: 100,
    height: 60,
    width: 65,
    fontSize: 28,
    lineHeight: 32,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    opacity: 0.2,
  },
});
