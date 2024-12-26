import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import Effy from './ui/Effy';

interface CallProps {
  visible: boolean;
  message?: string;
  id?: string;
  setVisible: (message: boolean) => void;
}

const { width } = Dimensions.get('window');

export default function Call({
  visible,
  message = 'יש אירוע חירום במיקומך',
  id = '11',
  setVisible,
}: CallProps) {
  const router = useRouter();

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {setVisible(false)}}
    >
      <View style={styles.overlay}>
        <Animatable.View
          animation="bounceIn"
          duration={800}
          style={styles.container}
        >
          <LinearGradient
            colors={['#ff9a9e', '#fad0c4']}
            style={styles.gradient}
          >
            <Effy feeling="worried" />
            <Text style={styles.message}>
              {message}
            </Text>
            <View style={styles.buttonContainer}>
              <Animatable.View
                animation="pulse"
                iterationCount="infinite"
                duration={1500}
                easing="ease-in-out"
                style={styles.acceptButtonWrapper}
              >
                <TouchableOpacity
                  style={styles.acceptButton}
                  onPress={() => {
                    router.push({
                      pathname: '/emergency',
                      params: { id },
                    });
                  }}
                >
                  <Text style={styles.buttonText}>קבל</Text>
                </TouchableOpacity>
              </Animatable.View>
              <TouchableOpacity
                style={styles.declineButton}
                onPress={() => {setVisible(false)}}
              >
                <Text style={styles.buttonText}>דחה</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </Animatable.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: width * 0.8,
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },
  gradient: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 15,
  },
  acceptButtonWrapper: {
    flex: 1,
    marginRight: 5,
    zIndex: 1,
  },
  acceptButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 6,
  },
  declineButton: {
    flex: 1,
    backgroundColor: '#f44336',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginLeft: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
