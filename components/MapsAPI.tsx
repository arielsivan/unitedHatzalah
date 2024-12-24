import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  Linking,
  Text,
} from 'react-native';
import MapsLogo from '@/components/Links/MapsLogo'; // Ensure correct path
import WazeLogo from '@/components/Links/WazeLogo'; // Ensure correct path

type MapsAPIProps = {
  address: string;
};

const MapsAPI: React.FC<MapsAPIProps> = ({ address }) => {
  const handleOpenWaze = async () => {
    const url = `waze://?q=${encodeURIComponent(address)}`;
    const fallbackUrl = `https://waze.com/ul?q=${encodeURIComponent(address)}`;

    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        await Linking.openURL(fallbackUrl);
      }
    } catch (error) {
      Alert.alert('Error', 'Unable to open Waze.');
    }
  };

  const handleOpenMaps = async () => {
    const encodedAddress = encodeURIComponent(address);
    const webUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

    try {
      await Linking.openURL(webUrl);
    } catch (error) {
      Alert.alert('Error', 'Unable to open Maps.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Waze Button */}
      <TouchableOpacity style={styles.button} onPress={handleOpenWaze}>
        <WazeLogo width={40} height={40} />
        <Text style={styles.buttonText}>Waze</Text>
      </TouchableOpacity>

      {/* Maps Button */}
      <TouchableOpacity style={styles.button} onPress={handleOpenMaps}>
        <MapsLogo width={40} height={40} />
        <Text style={styles.buttonText}>Maps</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MapsAPI;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E90FF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    marginLeft: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
