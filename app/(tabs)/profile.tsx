import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { getAuth, deleteUser } from 'firebase/auth';

import { Colors } from '../../constants/Colors';
import { Badge } from '@/types/data';
import { useAuthStore } from '@/stores/authStore';
import { CustomButton } from '@/components/ui/CustomButton';
import { Redirect, router } from 'expo-router';

export default function ProfileScreen() {
  const HandleDeleteAccount = async () => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        await deleteUser(user);
        alert('Your account has been deleted successfully.');
        // Optionally, navigate the user to a different screen
      } else {
        alert('No user is signed in.');
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error deleting user account:', error.message);

        if ((error as any).code === 'auth/requires-recent-login') {
          alert('Please log in again to delete your account.');
        }
      } else {
        console.error('An unknown error occurred:', error);
      }
    }
  };

  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const HandleLogout = () => {
    logout();
    router.replace('/auth/login');
  };

  const badges: Badge[] = [
    { id: 1, title: 'שיעור ראשון', icon: 'star-outline' },
    { id: 2, title: 'רצף של 5 ימים', icon: 'flame-outline' },
    { id: 3, title: 'השלים את הבסיסי', icon: 'trophy-outline' },
  ];
  const handleChoosePhoto = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert('Permission to access media library is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!pickerResult.canceled && pickerResult.assets?.[0].uri) {
      setProfileImage(pickerResult.assets[0].uri);
      setModalVisible(false);
    }
  };

  const handleTakePhoto = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (!permissionResult.granted) {
      alert('Permission to access camera is required!');
      return;
    }

    const cameraResult = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!cameraResult.canceled && cameraResult.assets?.[0].uri) {
      setProfileImage(cameraResult.assets[0].uri);
      setModalVisible(false);
    }
  };

  const handleResetProfileImage = () => {
    setProfileImage(null);
    setModalVisible(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Avatar Section */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri:
              profileImage || `https://robohash.org/${user?.name || 'default'}`,
          }}
          style={styles.avatar}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setModalVisible(true)}
          activeOpacity={0.7}
        >
          <Ionicons name="add-circle" size={30} color={Colors.accent} />
        </TouchableOpacity>
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

      {/* Modal for Image Options */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleTakePhoto}
            >
              <Ionicons name="camera-outline" size={24} color={Colors.accent} />
              <Text style={styles.modalButtonText}>תמונה</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleChoosePhoto}
            >
              <Ionicons name="image-outline" size={24} color={Colors.accent} />
              <Text style={styles.modalButtonText}>בחירה מגלריה</Text>
            </TouchableOpacity>
            {/* Reset to Default Button */}
            {profileImage && (
              <TouchableOpacity
                style={[styles.modalButton, styles.resetButton]}
                onPress={handleResetProfileImage}
              >
                <Ionicons
                  name="refresh-outline"
                  size={24}
                  color={Colors.accent}
                />
                <Text style={styles.modalButtonText}>ברירת מחדל</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={[styles.modalButton, styles.cancelButton]}
              onPress={() => setModalVisible(false)}
            >
              <Ionicons
                name="close-circle-outline"
                size={24}
                color={Colors.secondary}
              />
              <Text style={styles.modalButtonText}>ביטול</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>

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

      {/* logout */}
      <CustomButton title="התנתק" handlePress={HandleLogout} />

      {/* delete account */}
      <View style={styles.logoutButton}>
        <CustomButton
          title="מחק חשבון"
          backgroundColor={'red'}
          handlePress={HandleDeleteAccount}
        />
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
    marginBottom: 20,
    width: '100%',
    height: 200,
    justifyContent: 'flex-end',
    backgroundColor: Colors.secondary,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 0,
  },
  addButton: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // For Android shadow
  },
  username: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10,
    color: Colors.text,
  },
  badgesSection: {
    alignSelf: 'stretch',
    marginTop: 20,
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
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalButton: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    paddingVertical: 15,
  },
  resetButton: {
    borderTopWidth: 1,
    borderColor: Colors.secondary,
    marginTop: 10,
  },
  cancelButton: {
    marginTop: 10,
  },
  modalButtonText: {
    fontSize: 18,
    marginRight: 10,
    color: Colors.accent,
  },
  logoutButton: {
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'flex-end',
  },
});
