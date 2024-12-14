import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View, Text, Pressable, Modal, Alert } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { auth } from '@/configs/FirebaseConfig';
import { signOut } from 'firebase/auth';

export default function HomeScreen() {
    const router = useRouter();
    const user = auth.currentUser;

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                Alert.alert("התנתקת בהצלחה", "נחזור בקרוב!");
                router.push('/(tabs)');
            })
            .catch((error) => {
                console.error("Sign out error: ", error);
            });
    };

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
            headerImage={
                <Image
                    source={require('@/assets/images/UHNewLogo.png')}
                    style={styles.reactLogo}
                />
            }>
            {user ? (
                <View style={{ display: 'flex' }}>
                    <Text style={{ color: Colors.accent, fontSize: 20, alignSelf: 'flex-end' }}>
                        אתה מחובר
                    </Text>
                    <Pressable
                        style={{
                            backgroundColor: Colors.accent,
                            marginTop: 16,
                            padding: 16,
                            borderRadius: 8,
                        }}
                        onPress={handleSignOut}
                    >
                        <Text style={{ color: Colors.white, fontSize: 18 }}>התנתק</Text>
                    </Pressable>
                </View>
            ) : (
                <View>
                    <Pressable
                        style={{
                            backgroundColor: Colors.secondary,
                            padding: 16,
                            borderRadius: 8,
                            margin: 8,
                            alignItems: 'center',
                        }}
                        onPress={() => router.push('/auth/sign-in')}
                    >
                        <Text
                            style={{
                                fontSize: 18,
                                color: Colors.white,
                                fontWeight: 'bold',
                            }}
                        >
                            התחבר עכשיו
                        </Text>
                    </Pressable>
                </View>
            )}
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    reactLogo: {
        margin: 2,
        marginTop: 20,
        height: '90%',
        width: '98%',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        padding: 20,
        backgroundColor: Colors.white,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalMessage: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    modalActions: {
        flexDirection: 'row',
        gap: 10,
    },
    modalButton: {
        padding: 10,
        borderRadius: 5,
        minWidth: 80,
        alignItems: 'center',
    },
    modalButtonText: {
        color: Colors.white,
        fontSize: 16,
    },
});
