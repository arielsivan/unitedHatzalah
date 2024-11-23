import { Pressable, StyleSheet, View, Text } from 'react-native';

export function DuoChoice() {
    const questions = [
        "Mi padre se pone ocho camisetas.",
        "Mi abuelo tiene dos restaurantes.",
        "Mi abuelo tiene dos sándwiches."
    ];

    return (
        <View style={styles.body}>
            <Text style={styles.h1}>לסבא שלי יש שתי מסעדות.</Text>

            <View style={styles.buttonContainer}>
                {questions.map((question, index) => (
                    <Pressable
                        key={index}
                        style={({ pressed }) => [
                            styles.button,
                            pressed && styles.buttonPressed,
                        ]}
                        onPress={() => console.log(`Option ${index + 1} pressed!`)}
                    >
                        <View style={styles.answer}>
                            <Text style={styles.answerNumber}>{index + 1}</Text>
                            <Text style={styles.answerChoice}>{question}</Text>
                        </View>
                    </Pressable>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        fontFamily: 'sans-serif',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        padding: 20,
    },
    h1: {
        fontWeight: '400',
        textAlign: 'center',
        fontSize: 24,
        marginBottom: 20,
    },
    buttonContainer: {
        width: '100%',
        maxWidth: 700,
    },
    button: {
        minWidth: "100%",
        borderRadius: 16,
        borderWidth: 2,
        borderBottomWidth : 6,
        borderColor: '#e5e5e5',
        paddingVertical: 12,
        paddingHorizontal : 16,
        margin : 10,
        transitionDelay : "0.1s",
        transitionProperty : "all",

    },
    buttonPressed: {
        backgroundColor: '#ddf4ff',
        borderColor: '#1cb0f6',
        transform: [{ translateY: 2 }],
    },
    answer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    answerNumber: {
        borderWidth: 2,
        borderColor: '#e5e5e5',
        borderRadius: 8,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 16,
        marginRight: 10,
    },
    answerChoice: {
        fontSize: 19,
        color: '#4b4b4b',
    },
});
