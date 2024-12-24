import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

export default function ProgressBar({
  progress = 0.3, // Value between 0 and 1
  width = 300,
  height = 20,
  color = '#58CC02',
  backgroundColor = '#E5E5E5',
  animated = true,
}) {
  const animatedWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (animated) {
      Animated.timing(animatedWidth, {
        toValue: progress,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    } else {
      animatedWidth.setValue(progress);
    }
  }, [progress]);

  const progressWidth = animatedWidth.interpolate({
    inputRange: [0, 1],
    outputRange: [0, width], // Use numeric values here for proper width calculation
  });

  return (
    <View style={[styles.container, { width, height }]}>
      <View style={[styles.backgroundBar, { width, height, backgroundColor }]}>
        <Animated.View
          style={[
            styles.progressBar,
            {
              width: progressWidth,
              backgroundColor: color,
            },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backgroundBar: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: 10,
  },
});
