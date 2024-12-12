import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { DuoButton } from '@/components/DuoButton';
import DuoRoundButton from '@/components/DuoRoundButton';
import { DuoHeart } from '@/components/DuoHeart';

export default function Learning() {
    const items = [
        { emoji: '💉', background: '#9de19a' },
        { emoji: '🩸', background: '#a4c5ea' },
        { emoji: '💊', background: '#bca9e1' },
        { emoji: '🩺', background: '#f5c6aa' }, // Stethoscope
        { emoji: '🏥', background: '#e1d8b2' }, // Hospital
        { emoji: '🩹', background: '#cfe7d7' }, // Bandage
        { emoji: '🛏️', background: '#e6abb7' }, // Bed
        { emoji: '🚑', background: '#d6e5f3' }, // Ambulance
        { emoji: '⚕️', background: '#a6e1e1' }, // Medical symbol
        { emoji: '🥼', background: '#fff5ba' }, // Lab coat
    ];

    return (
        <View style={{ flex: 1, backgroundColor : '' }}>
            <View
                style={{
                    backgroundColor: '#e5cbba',
                    width: '100%',
                    flexDirection: 'row',
                    padding: 10,
                    paddingTop: 30,
                }}
            >
                <View
                    style={{
                        marginLeft: 'auto',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                    }}
                >
                    <DuoHeart />
                    <Text
                        style={{
                            fontFamily: 'SpaceMono',
                            marginLeft: 10,
                            fontSize: 25,
                            color: 'red',
                        }}
                    >
                        5
                    </Text>
                </View>
            </View>
            <ScrollView
                style={{ flex: 1 }}
                contentContainerStyle={{
                    margin: 10,
                    marginTop: 20,
                    paddingBottom: 50,
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                {items.map((item, key) => {
                    const step = 70;
                    const snakeMargin = step * Math.abs((key % 4) - 2) - step;

                    return (
                        <View
                            key={key}
                            style={{
                                marginLeft: snakeMargin,
                            }}
                        >
                            <DuoRoundButton
                                text={item.emoji}
                                backgroundColor={item.background}
                            />
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
}
