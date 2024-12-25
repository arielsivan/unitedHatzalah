import {
  View,
  Text,
  Modal,
  Pressable,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Colors } from '@/constants/Colors';
import * as FileSystem from 'expo-file-system';
import { useAuthStore } from '@/stores/authStore';

interface ModalImageOptionsProps {
  modalVisible: boolean;
  setAvatar: (avatar: string) => void;
  setModalVisible: (visible: boolean) => void;
}

export default function ModalImageOptions({
  modalVisible,
  setModalVisible,
  setAvatar,
}: ModalImageOptionsProps) {
  const updateAvatar = useAuthStore((state) => state.updateAvatar);

  const handleChoosePhoto = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert('Permission to access media library is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5,
      base64: Platform.OS === 'web', // Save base64 on web
    });

    if (!pickerResult.canceled && pickerResult.assets?.[0].uri) {
      let base64 = '';
      setModalVisible(false);
      if (Platform.OS === 'web') {
        base64 = `data:image/jpeg;base64,${pickerResult.assets[0].base64}`;
      } else {
        base64 =
          'data:image/jpeg;base64,' +
          (await FileSystem.readAsStringAsync(pickerResult.assets[0].uri, {
            encoding: 'base64',
          }));
      }
      setAvatar(base64);
      updateAvatar(base64);
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
      setAvatar(cameraResult.assets[0].uri);
      setModalVisible(false);
    }
  };

  const handleResetProfileImage = () => {
    setAvatar('https://robohash.org/default');
    setModalVisible(false);
  };

  return (
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
          {
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
          }
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
  );
}

const styles = StyleSheet.create({
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
  modalButtonText: {
    fontSize: 18,
    marginRight: 10,
    color: Colors.accent,
  },
  resetButton: {
    borderTopWidth: 1,
    borderColor: Colors.secondary,
    marginTop: 10,
  },
  cancelButton: {
    marginTop: 10,
  },
});
