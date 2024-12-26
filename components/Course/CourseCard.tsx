import { useArrayStore } from '@/stores/arrStore';
import { Course } from '@/types/data';
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


export default function CourseCard({ id, title, description, image } : Course) {
    const router = useRouter();
    const addItem = useArrayStore((state) => state.addItem);
    const handlePress = () => {
        if(id == 'F4wA3R7V0dIzb7ya2NJ4') addItem('Fire')
        else addItem('CPR');
        router.push(`/course/${id}`)
    }
    
    return (


        <TouchableOpacity style={styles.card} onPress={handlePress}>
            {/* Course Image */}
            <Image source={{ uri: image }} style={styles.image} />

            {/* Course Info */}
            <View style={styles.info}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description} numberOfLines={3}>
                    {description}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#f8f9fa',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 8,
        marginVertical: 12,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    image: {
        width: '100%',
        height: 160,
        resizeMode: 'cover',
    },
    info: {
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: '#7f8c8d',
        lineHeight: 22,
    },
});
