import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';
import { CustomButton } from './CustomButton';

export default function Login() {
  const router = useRouter();

  return (
    <View>

      <Image
        source={require('@/assets/images/UHNewLogo.png')}
        style={{
          width: '100%',
          height: 300,
        }}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 30,
            textAlign: 'center',
            marginTop: 20,
          }}
        >
          אוי ואבוי אתה לא מחובר
        </Text>
        
        <Text
          style={{
            fontSize: 17,
            textAlign: 'center',
            color: Colors.secondary,
          }}
        >
          אנא התחבר לחשבון שלך כדי להמשיך לשימוש באפליקציה
        </Text>

        <CustomButton
          color={Colors.white}
          backgroundColor={Colors.blue}
          title={'התחבר לישומון'}
          handlePress={() => router.push('/auth/sign-in')}
        ></CustomButton>

        {/* Only in Dev */}

        <View style={{ gap: 2 }}>
          <Text style={styles.text}> ⚠️⚠️⚠️</Text>
          <Text style={styles.text}>
            בשביל לחסוך זמן יש אפשרות לעבור קדימה ללא התחברות.
          </Text>
          <Text style={styles.text}> נמחוק לפני הגרסה הסופית</Text>
        </View>

        <CustomButton
          color={Colors.white}
          backgroundColor={Colors.blue}
          title={'המשך ללא התחברות'}
          handlePress={() => router.push('/(tabs)')}
        ></CustomButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: '100%',
    padding: 25,
    gap: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 17,
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.orange,
  },
});
