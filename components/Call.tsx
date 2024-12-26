import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { useRouter } from 'expo-router';

type CallProps = {
  visible: boolean;
};

const Call: React.FC<CallProps> = ({ visible }) => {
  const router = useRouter();
  const [myVisibility, setVisibility] = useState(visible);

  useEffect(() => {
    let sound: Audio.Sound | null = null;

    const playAlertSound = async () => {
      try {
        sound = new Audio.Sound();
        await sound.loadAsync(require('@/assets/alarm.mp3')); // Ensure the file path is correct
        await sound.setIsLoopingAsync(true);
        await sound.playAsync();
      } catch (error) {
        console.error('Error playing sound:', error);
      }
    };

    if (visible) {
      // playAlertSound();
    }

    return () => {
      if (sound) {
        sound.stopAsync().catch(console.error); // Ensure the sound stops safely
        sound.unloadAsync().catch(console.error); // Ensure the sound is unloaded
      }
    };
  }, [visible]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={myVisibility}
      onRequestClose={() => setVisibility(false)}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.message}>יש אירוע החייאה בקרבתך</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.acceptButton}
              onPress={() => {
                router.push({
                  pathname: '/emergency',
                  params: { id: '11' },
                });
                setVisibility(false);
              }}
            >
              <Text style={styles.buttonText}>קבל</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.declineButton}
              onPress={() => setVisibility(false)}
            >
              <Text style={styles.buttonText}>דחה</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Call;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  message: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  acceptButton: {
    flex: 1,
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    borderRadius: 5,
    marginRight: 5,
    alignItems: 'center',
  },
  declineButton: {
    flex: 1,
    backgroundColor: '#f44336',
    paddingVertical: 10,
    borderRadius: 5,
    marginLeft: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
