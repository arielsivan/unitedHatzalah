import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Colors } from '../../constants/Colors';
import { Badge } from '@/types/data';
import { useAuthStore } from '@/stores/authStore';

export default function ProfileScreen() {
    const user = useAuthStore((state) => state.user);

    const badges: Badge[] = [
        { id: 1, title: 'שיעור ראשון', icon: 'star-outline' },
        { id: 2, title: 'רצף של 5 ימים', icon: 'flame-outline' },
        { id: 3, title: 'השלים את הבסיסי', icon: 'trophy-outline' },
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Avatar Section */}
            <View style={styles.avatarContainer}>
                <Image
                    source={{ uri: `https://robohash.org/${user?.name || '34'}` }} // Placeholder image if no avatar
                    style={styles.avatar}
                />
            </View>

            {/* User Information */}
            <Text style={styles.username}>{user?.name || 'אורח'}</Text>
            <Text style={styles.email}>{user?.email || 'לא מחובר עדיין'}</Text>

            {/* Streak, Hearts, and Gems */}
            <View style={styles.statsContainer}>
                <View style={styles.statItem}>
                    <Ionicons name="flame-outline" size={24} color={Colors.accent} />
                    <Text style={styles.statText}>רצף: {user?.streak || 0}</Text>
                </View>
                <View style={styles.statItem}>
                    <Ionicons name="heart-outline" size={24} color={Colors.accent} />
                    <Text style={styles.statText}>לבבות: {user?.hearts || 0}</Text>
                </View>
                <View style={styles.statItem}>
                    <Ionicons name="cash-outline" size={24} color={Colors.accent} />
                    <Text style={styles.statText}>יהלומים: {user?.gems || 0}</Text>
                </View>
            </View>

            {/* Badges Section */}
            <View style={styles.badgesContainer}>
                <Text style={styles.sectionTitle}> ההישגים שלי: </Text>
                <View style={styles.badgesList}>
                    {(user?.badges || []).map((badge) => (
                        <View key={badge.id} style={styles.badgeItem}>
                            <Ionicons
                                name={badge.icon as any}
                                size={48}
                                color={Colors.accent}
                                style={styles.badgeIcon}
                            />
                            <Text style={styles.badgeTitle}>{badge.title}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 20,
        width : '100%',
        height: 200,
        justifyContent: 'flex-end',
        backgroundColor: Colors.secondary,
    },
    avatar: {
        width: 200,
        height: 200,
        borderRadius: 0,
    },
    username: {
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 10,
        color: Colors.text,
    },
    email: {
        fontSize: 16,
        color: 'gray',
        marginBottom: 20,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 20,
    },
    statItem: {
        alignItems: 'center',
        marginHorizontal: 15,
    },
    statText: {
        fontSize: 16,
        marginTop: 5,
        color: Colors.text,
    },
    badgesContainer: {
        width: '100%',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
        color: Colors.text,
    },
    badgesList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    badgeItem: {
        alignItems: 'center',
        margin: 10,
    },
    badgeIcon: {
        borderRadius: 50,
        backgroundColor: '#f0f0f0',
        padding: 15,
    },
    badgeTitle: {
        marginTop: 5,
        fontSize: 14,
        textAlign: 'center',
        color: Colors.text,
    },
});
