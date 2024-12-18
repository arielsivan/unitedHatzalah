import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useEffect, useState, useMemo } from 'react';
import { useColorAdjust } from '@/hooks/useColorAdjust';

interface Props {
    backgroundColor: string;
    text: string;
}

export default function LessonButton(props: Props) {
    const [text, setText] = useState(props.text);
    const { lighten, darken } = useColorAdjust();

    useEffect(() => {
        setText(props.text);
    }, [props.text]);

    const buttonStyles = useMemo(() => {
        const shadowColor = darken(props.backgroundColor, 20); // Use darken to adjust shadow
        return {
            backgroundColor: props.backgroundColor,
            shadowColor,
        };
    }, [props.backgroundColor, darken]);

    return (
        <View style={styles.container}>
            <Pressable
                style={({ pressed }) => [
                    styles.round,
                    { backgroundColor: buttonStyles.backgroundColor,
                        shadowColor: buttonStyles.shadowColor },
                    pressed && styles.buttonRoundPressed,
                ]}
                onPress={() => {}}
            >
                <Text style={styles.text}>{text}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    text: {
        fontSize: 28,
        lineHeight: 32,
        fontWeight: 'bold',
        color: 'white',
    },
    round: {
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 0,
        borderRadius: 100,
        width: 65,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonRoundPressed: {
        shadowOffset: { width: 0, height: 0 },
        transform: [{ translateY: 5 }],
    },
});
