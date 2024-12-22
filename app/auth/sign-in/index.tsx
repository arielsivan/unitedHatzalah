import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  I18nManager,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useAuthStore } from '@/stores/authStore';
import { CustomButton } from '@/components/CustomButton';
import { runOnUIImmediately } from 'react-native-reanimated/lib/typescript/threads';

export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = useAuthStore((state) => state.login);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });

    // Ensure app is in RTL mode for Hebrew
    I18nManager.forceRTL(true);
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      router.replace('/(tabs)');
    }
  }, [isAuthenticated]);

  const onSignIn = async () => {
    if (!email || !password) {
      ToastAndroid.show('יש למלא את כל השדות', ToastAndroid.LONG);
      return;
    }

    try {
      await login(email, password);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => router.back()}
        style={{ alignSelf: 'flex-end' }}
      >
        <Ionicons name="arrow-forward" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>בואו נתחבר</Text>
      <Text style={styles.subtitle}>ברוכים הבאים</Text>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setEmail(value)}
          placeholder="הכניסו אימייל"
          textAlign="right"
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          secureTextEntry
          onChangeText={(value) => setPassword(value)}
          placeholder="הכניסו סיסמה"
          textAlign="right"
        />
      </View>

      {/* Sign In Button */}
      <CustomButton
        backgroundColor={Colors.blue}
        title={'התחבר'}
        handlePress={onSignIn}
      ></CustomButton>

      <View style={styles.divider}>
        <View style={styles.line} />
        <Text style={styles.dividerSpan}>או</Text>
        <View style={styles.line} />
      </View>

      {/* Create Account Button */}
      <CustomButton
        backgroundColor={Colors.white}
        title={'צור חשבון'}
        handlePress={() => router.push('/auth/sign-up')}
      ></CustomButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    height: '100%',
    backgroundColor: Colors.accent,
    gap : 10
  },

  title: {
    fontSize: 32,
    marginBottom: 10,
    color: 'white',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 24,
    color: Colors.white,
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    marginTop: 10,
    width: '100%',
  },
  input: {
    width: '100%',
    borderRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    fontSize: 16,
    padding: 15,
    backgroundColor: '#e5e5e5',
    borderWidth: 2,
    borderColor: '#a5a5a5',

  },
  divider: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    marginTop: 16,
  },

  line: {
    borderWidth : 0.5,
    width: '45%',
    backgroundColor: 'black',
  },

  dividerSpan: {
    color: 'black',
    fontSize: 18,
  }
});

