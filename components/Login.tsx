import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // עבור אייקון הדלת

export default function Login() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require('@/assets/background.jpg')} // עדכן את הנתיב לפי המיקום המדויק
      style={styles.background}
    >
      <View style={styles.overlay}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: Colors.blue }]}
          onPress={() => router.push('/auth/login')}
        >
          <Text style={[styles.buttonText, { color: Colors.white }]}>
            התחבר לישומון
          </Text>
        </TouchableOpacity>

        {/* אייקון דלת */}
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => router.push('/(tabs)')}
        >
          <Ionicons name="exit-outline" size={28} color={Colors.orange} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // ממלא את כל המסך
    backgroundColor: 'rgba(255, 255, 255, 0.6)', // צבע לבן עם שקיפות של 30%
  },
  logo: {
    width: '80%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  container: {
    backgroundColor: Colors.white,
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.orange,
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: Colors.secondary,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    width: '80%',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  devNote: {
    alignItems: 'center',
    marginBottom: 30,
  },
  warning: {
    fontSize: 20,
    color: Colors.orange,
    marginBottom: 5,
  },
  warningText: {
    fontSize: 14,
    color: Colors.orange,
    textAlign: 'center',
  },
  iconButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
});
