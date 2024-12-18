import { View, Text, Pressable, StyleSheet } from 'react-native'
import { useEffect, useState } from 'react';
import { useColorAdjust } from '@/hooks/useColorAdjust';

interface Props {
    backgroundColor: string;
    text : string;
}

export default function LessonButton(props : Props) {

    let [text, setText] = useState(props.text);

    const { lighten, darken } = useColorAdjust();
    const dynamicStyles = getDynamicStyles(props.backgroundColor, darken);

    useEffect(() => {
        setText(props.text);
    }, [props.text]);

    return (
        <View style={{
            margin : 10
        }}>
            <Pressable 
                    style={({ pressed }) => [
                        dynamicStyles.round,
                        pressed && dynamicStyles.buttonRoundPressed,
                        {backgroundColor : props.backgroundColor}
                    ]}
                    onPress={() => {}}>
                <Text style={styles.text}>{text}</Text>
            </Pressable>
        </View>
    )
}

const getDynamicStyles = (backgroundColor : string, darken: (color: string, amount: number) => string) => ({
    
    round : {
        boxShadow: "0 5px 0 " + darken(backgroundColor, -20),
        borderRadius : 100,
        width : 65,
        height : 60,
        alignItems: 'center' as 'center',
        justifyContent: 'center' as 'center',
        backgroundColor : backgroundColor
    },
    buttonRoundPressed : {
        boxShadow : "none",
        transform : "translateY(5px)"
    }
})

const styles = StyleSheet.create({
    text: {
        fontSize: 28,
        lineHeight: 32,
        margin: 10,
        fontWeight : "bold",
        color: "white",
    },
    round : {
        boxShadow: "0 5px 0 #1cb0f6",
        borderRadius : 100,
        width : 65,
        height : 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonRoundPressed : {
        boxShadow : "none",
        transform : "translateY(5px)"
    }
});
