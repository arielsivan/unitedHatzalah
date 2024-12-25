import { create } from 'zustand';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth, db } from '@/configs/FirebaseConfig';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { ToastAndroid } from 'react-native';
import { UserProf } from '@/types/data';

interface AuthState {
  isAuthenticated: boolean;
  user: UserProf | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  createUser: (
    email: string,
    password: string,
    fullName: string,
  ) => Promise<void>;
  logout: () => void;
  fetchUserData: (userId: string) => Promise<void>;
  updateAvatar : (avatar: string) => void;
}

/**
 * Auth store for managing authentication state.
 *
 * @typedef {Object} AuthState
 * @property {boolean} isAuthenticated - Indicates if the user is authenticated.
 * @property {UserProf | null} user - The authenticated user's profile data.
 * @property {string | null} token - The authentication token.
 * @property {boolean} loading - Indicates if an authentication-related operation is in progress.
 *
 * @function login
 * @async
 * @param {string} email - The user's email address.
 * @param {string} password - The user's password.
 * @description Authenticates the user with the provided email and password.
 * Sets the loading state to true during the process and updates the store with the user's authentication state upon success or failure.
 *
 * @function createUser
 * @async
 * @param {string} email - The new user's email address.
 * @param {string} password - The new user's password.
 * @param {string} fullName - The new user's full name.
 * @description Creates a new user with the provided email, password, and full name.
 * Sets the loading state to true during the process and updates the store with the user's authentication state upon success or failure.
 *
 * @function logout
 * @description Logs out the current user.
 * Sets the loading state to true during the process and updates the store to reflect the user's logged-out state.
 *
 * @function fetchUserData
 * @async
 * @param {string} userId - The ID of the user whose data is to be fetched.
 * @description Fetches the profile data of the user with the provided ID.
 * Sets the loading state to true during the process and updates the store with the user's profile data upon success or failure.
 */
export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
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
      const today = new Date();

      const userData: UserProf = {
        name: fullName,
        email,
        gems: 0,
        hearts: 5,
        streak: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        badges: [],
        avatar: 'https://robohash.org/' + fullName,
        progress: undefined,
        xp: 0,
      };

      await setDoc(doc(db, 'users', user.uid), userData);

      set({
        isAuthenticated: true,
        user: userData,
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
    set({ isAuthenticated: false, user: null, loading: false }); // Set loading to false after logout
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

  updateAvatar: async (avatar: string) => {
    const currentUser = useAuthStore.getState().user;
    if (currentUser) {
      const userId = auth.currentUser?.uid;
      if (!userId) {
        console.error("User ID not found");
        return;
      }
  
      try {
        // Update the avatar in Firestore
        const userRef = doc(db, "users", userId);
        await setDoc(userRef, { avatar }, { merge: true });
  
        // Update the local store
        set({ user: { ...currentUser, avatar } });
  
        ToastAndroid.show("Avatar updated successfully!", ToastAndroid.LONG);
      } catch (error: any) {
        console.error("Failed to update avatar:", error);
        ToastAndroid.show("Failed to update avatar", ToastAndroid.LONG);
      }
    }
  }  
}));
