import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const FacebookLogoSvg = () => (
  <SvgXml
    xml={`<svg width="12" height="22" viewBox="0 0 12 22"><path fill="#3C5A99" d="M7.275 21.584v-9.845h3.305l.495-3.837h-3.8v-2.45c0-1.111.309-1.868 1.902-1.868l2.032-.001V.15C10.857.104 9.65 0 8.249 0c-2.93 0-4.936 1.788-4.936 5.072v2.83H0v3.837h3.313v9.845h3.962z"/></svg>`}
  />
);

const GoogleLogoSvg = () => (
  <SvgXml
    xml={`<svg viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>`}
  />
);

const LoginScreen = () => {
  const navigation = useNavigation();
  const [loginScreenState, setLoginScreenState] = useState<'LOGIN' | 'SIGNUP' | 'HIDDEN'>('LOGIN');
  const nameInputRef = useRef<TextInput | null>(null);

  const toggleLoginState = () => {
    setLoginScreenState((state) => (state === 'LOGIN' ? 'SIGNUP' : 'LOGIN'));
  };

  const logInAndSetUserProperties = () => {
    const name = `User-${Math.random().toString().slice(2)}`;
    console.log('Logged in as:', name);
    // navigation.navigate('LearnScreen');
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView contentContainerStyle={styles.inner}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setLoginScreenState('HIDDEN')}>
            <Text style={styles.closeText}>X</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleLoginState}>
            <Text style={styles.toggleText}>
              {loginScreenState === 'LOGIN' ? 'Sign up' : 'Login'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <Text style={styles.title}>
            {loginScreenState === 'LOGIN' ? 'Log in' : 'Create your profile'}
          </Text>
          <TextInput
            style={styles.input}
            placeholder={loginScreenState === 'LOGIN' ? 'Email or username' : 'Email'}
          />
          {loginScreenState === 'SIGNUP' && (
            <TextInput style={styles.input} placeholder="Name" ref={nameInputRef} />
          )}
          <TextInput style={styles.input} placeholder="Password" secureTextEntry />
          <TouchableOpacity style={styles.button} onPress={logInAndSetUserProperties}>
            <Text style={styles.buttonText}>
              {loginScreenState === 'LOGIN' ? 'Log in' : 'Create account'}
            </Text>
          </TouchableOpacity>
          <View style={styles.divider}>
            <Text style={styles.dividerText}>OR</Text>
          </View>
          <View style={styles.socialButtons}>
            <TouchableOpacity style={styles.socialButton}>
              <FacebookLogoSvg />
              <Text style={styles.socialButtonText}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <GoogleLogoSvg />
              <Text style={styles.socialButtonText}>Google</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inner: {
    padding: 20,
    flexGrow: 1,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  closeText: {
    fontSize: 18,
    color: '#ccc',
  },
  toggleText: {
    fontSize: 16,
    color: '#1E90FF',
  },
  body: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#1E90FF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  dividerText: {
    color: '#ccc',
    marginHorizontal: 10,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    flex: 1,
    marginHorizontal: 5,
    justifyContent: 'center',
  },
  socialButtonText: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
