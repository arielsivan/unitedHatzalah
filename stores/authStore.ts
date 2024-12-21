import { create } from 'zustand';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth, db } from '@/configs/FirebaseConfig';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { ToastAndroid } from 'react-native';
import { UserProf } from '@/types/data';

interface AuthState {
  isAuthenticated: boolean;
  user: UserProf | null;
  token: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  createUser: (
    email: string,
    password: string,
    fullName: string,
  ) => Promise<void>;
  logout: () => void;
  fetchUserData: (userId: string) => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  token: null,
  loading: false, // Initialize loading state as false

  login: async (email, password) => {
    set({ loading: true }); // Set loading to true when login starts
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;

      set({
        isAuthenticated: true,
        token: user.uid,
        loading: false, // Set loading to false when login is successful
      });

      await useAuthStore.getState().fetchUserData(user.uid);
    } catch (error: any) {
      console.error('Login failed:', error);
      const errorMsg = error.message;
      ToastAndroid.show(errorMsg, ToastAndroid.LONG);
      set({ loading: false }); // Set loading to false if login fails
    }
  },

  createUser: async (email, password, fullName) => {
    set({ loading: true }); // Set loading to true when creating a new user
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;

      const userData: UserProf = {
        name: fullName,
        email,
        gems: 0,
        hearts: 5,
        streak: 0,
        badges: [],
      };

      await setDoc(doc(db, 'users', user.uid), userData);

      set({
        isAuthenticated: true,
        user: userData,
        token: user.uid,
        loading: false, // Set loading to false after account creation
      });

      ToastAndroid.show('Account created successfully!', ToastAndroid.LONG);
    } catch (error: any) {
      console.error('Account creation failed:', error);
      const errorMsg = error.message;
      ToastAndroid.show(errorMsg, ToastAndroid.LONG);
      set({ loading: false }); // Set loading to false if account creation fails
    }
  },

  logout: () => {
    set({ loading: true }); // Set loading to true during logout
    auth.signOut();
    set({ isAuthenticated: false, user: null, token: null, loading: false }); // Set loading to false after logout
    console.log('User logged out');
  },

  fetchUserData: async (userId) => {
    set({ loading: true }); // Set loading to true while fetching user data
    try {
      const docRef = doc(db, 'users', userId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userData = docSnap.data() as UserProf;
        set({ user: userData, loading: false }); // Set loading to false after fetching user data
      } else {
        console.log('No such document!');
        set({ user: null, loading: false }); // Set loading to false if no user data is found
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      set({ user: null, loading: false }); // Set loading to false in case of error
    }
  },
}));
