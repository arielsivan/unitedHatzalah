import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid, I18nManager } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/configs/FirebaseConfig';

export default function SignIn() {
    const navigation = useNavigation();
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        });

        // Ensure app is in RTL mode for Hebrew
        I18nManager.forceRTL(true);
    }, []);

    const onSignIn = () => {
        if (!email || !password) {
            ToastAndroid.show("יש למלא את כל השדות", ToastAndroid.LONG);
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                router.replace('/(tabs)/learning');
                console.log('User signed in: ', user.email);
            })
            .catch((err) => {
                const errorCode = err.code;
                const errorMsg = err.message;
                console.log(errorCode, errorMsg);
                if (errorCode === 'auth/invalid-credentials') {
                    ToastAndroid.show(errorMsg, ToastAndroid.LONG);
                }
            });
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => router.back()} style={{ alignSelf: 'flex-end' }}>
                <Ionicons name="arrow-forward" size={24} color="black" />
            </TouchableOpacity>

            <Text style={styles.title}>בואו נתחבר</Text>
            <Text style={styles.subtitle}>ברוכים הבאים</Text>
            <Text style={styles.subtitle}>התגעגענו אליכם!</Text>

            {/* Email */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>אימייל</Text>
                <TextInput 
                    style={styles.input}
                    onChangeText={(value) => setEmail(value)}
                    placeholder="הכניסו אימייל"
                    textAlign="right"
                />
            </View>

            {/* Password */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>סיסמה</Text>
                <TextInput 
                    style={styles.input}
                    secureTextEntry={true}
                    onChangeText={(value) => setPassword(value)}
                    placeholder="הכניסו סיסמה"
                    textAlign="right"
                />
            </View>

            {/* Sign In Button */}
            <TouchableOpacity onPress={onSignIn} style={styles.signInButton}>
                <Text style={styles.buttonText}>התחבר</Text>
            </TouchableOpacity>

            {/* Create Account Button */}
            <TouchableOpacity onPress={() => router.push('/auth/sign-up')} style={styles.createAccountButton}>
                <Text style={styles.buttonText}>צור חשבון</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 25,
        height: '100%',
        backgroundColor: Colors.accent,
        display: 'flex',
        alignItems: 'flex-end',
    },
    title: {
        fontFamily: 'Almoni',
        fontSize: 30,
        marginTop: 20,
        textAlign: 'right',
    },
    subtitle: {
        fontFamily: 'outfit-bold',
        fontSize: 30,
        color: Colors.dark.text,
        textAlign: 'right',
    },
    inputContainer: {
        marginTop: 20,
        width: '100%',
    },
    label: {
        fontFamily: 'outfit',
        textAlign: 'right',
    },
    input: {
        padding: 15,
        borderColor: Colors.blue,
        borderRadius: 15,
        borderWidth: 1,
        textAlign: 'right',
    },
    signInButton: {
        marginTop: 50,
        padding: 20,
        backgroundColor: Colors.white,
        borderRadius: 15,
        width: '100%',
    },
    createAccountButton: {
        marginTop: 20,
        padding: 20,
        backgroundColor: Colors.white,
        borderRadius: 15,
        borderWidth: 1,
        width: '100%',

    },
    buttonText: {
        textAlign: 'center',
        color: Colors.primary,
    },
});
