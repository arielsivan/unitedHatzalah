import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
} from 'react-native';
import EmergencyCard from '@/components/Emergency/EmergencyCard';
import { emergencyData, EmergencyInfo } from '@/mocks/emergencyData'; // Adjust the import path as needed

type ButtonData = {
  id: number;
  title: string;
  // Add any additional properties like icons if needed
};

// Define synonyms for each emergency type
const emergencySynonyms: { [key: string]: string[] } = {
  Fire: ['burn', 'burning', 'burns', 'fire'],
  Medical: ['injury', 'hurt', 'first aid', 'medical'],
  Police: ['crime', 'law', 'safety', 'police'],
  'Natural Disaster': ['tornado', 'earthquake', 'flood', 'hurricane'],
  'Roadside Assistance': ['car', 'vehicle', 'tire', 'roadside'],
  'Search & Rescue': ['missing', 'rescue', 'search'],
  HazMat: ['hazardous', 'chemical', 'toxic', 'hazmat'],
  Evacuation: ['leave', 'exit', 'evacuate'],
  Other: ['miscellaneous', 'other', 'general emergency'],
  'First Aid': ['aid', 'help', 'assistance'],
  החייאה: [
    'cardiopulmonary resuscitation',
    'cpr',
    'התקף',
    'התקפת לב',
    'התקף לב',
    'לב',
  ],
  'Report Incident': ['report', 'incident', 'alert'],
  'Safety Tips': ['tips', 'safety', 'advice'],
  'Contact Support': ['support', 'help', 'assistance'],
  // Add more synonyms as needed
};

const topButtons: ButtonData[] = [
  { id: 1, title: 'Fire' },
  { id: 2, title: 'Medical' },
  { id: 3, title: 'Police' },
  { id: 4, title: 'Natural Disaster' },
  { id: 5, title: 'Roadside Assistance' },
  { id: 6, title: 'Search & Rescue' },
  { id: 7, title: 'HazMat' },
  { id: 8, title: 'Evacuation' },
  { id: 9, title: 'Other' },
];

const bottomButtons: ButtonData[] = [
  { id: 10, title: 'First Aid' },
  { id: 11, title: 'החייאה' },
  { id: 12, title: 'Report Incident' },
  { id: 13, title: 'Safety Tips' },
  { id: 14, title: 'Contact Support' },
  // Add more buttons as needed
];

const EmergencyScreen: React.FC = () => {
  const [selectedEmergency, setSelectedEmergency] =
    useState<EmergencyInfo | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [noResults, setNoResults] = useState<boolean>(false);

  const handleButtonPress = (id: number) => {
    const emergencyInfo = emergencyData[id];
    if (emergencyInfo) {
      setSelectedEmergency(emergencyInfo);
    } else {
      setSelectedEmergency({
        id: id,
        header: 'Emergency Not Found',
        steps: ['No information available for this emergency type.'],
      });
    }
  };

  const handleCloseCard = () => {
    setSelectedEmergency(null);
  };

  // Function to map search query to emergency IDs based on synonyms
  const mapQueryToEmergency = (query: string): number[] => {
    const lowerQuery = query.toLowerCase();
    const matchedIds: number[] = [];

    for (const [title, synonyms] of Object.entries(emergencySynonyms)) {
      if (synonyms.includes(lowerQuery)) {
        const foundEntry = Object.values(emergencyData).find(
          (info) => info.header.toLowerCase().includes(title.toLowerCase())
        );
        if (foundEntry) {
          matchedIds.push(foundEntry.id);
        }
      }
    }

    return matchedIds;
  };

  // Function to filter buttons based on search query and synonyms
  const filterButtons = (buttons: ButtonData[]) => {
    if (searchQuery.trim() === '') {
      // If search is empty, show all buttons
      return buttons;
    }

    const matchedIds = mapQueryToEmergency(searchQuery.trim());

    return buttons.filter(
      (button) =>
        button.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        matchedIds.includes(button.id)
    );
  };

  // Effect to handle "No Results" state
  React.useEffect(() => {
    const filteredTop = filterButtons(topButtons);
    const filteredBottom = filterButtons(bottomButtons);
    if (filteredTop.length === 0 && filteredBottom.length === 0) {
      setNoResults(true);
    } else {
      setNoResults(false);
    }
  }, [searchQuery]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search emergency..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        accessibilityLabel="Search emergency types"
        returnKeyType="search"
      />

      {/* No Results Message */}
      {noResults && (
        <Text style={styles.noResultsText}>No matching emergencies found.</Text>
      )}

      {/* Top Buttons */}
      <View style={styles.topButtonsContainer}>
        {filterButtons(topButtons).map((button) => (
          <TouchableOpacity
            key={button.id}
            style={styles.topButton}
            onPress={() => handleButtonPress(button.id)}
            accessibilityLabel={`Emergency option: ${button.title}`}
          >
            <Text style={styles.topButtonText}>{button.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Bottom Buttons */}
      <View style={styles.bottomButtonsContainer}>
        {filterButtons(bottomButtons).map((button) => (
          <TouchableOpacity
            key={button.id}
            style={styles.bottomButton}
            onPress={() => handleButtonPress(button.id)}
            accessibilityLabel={`Emergency option: ${button.title}`}
          >
            <Text style={styles.bottomButtonText}>{button.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Display EmergencyCard if an emergency is selected */}
      {selectedEmergency && (
        <EmergencyCard
          header={selectedEmergency.header}
          steps={selectedEmergency.steps}
          onClose={handleCloseCard}
        />
      )}
    </ScrollView>
  );
};

export default EmergencyScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: '#f0f0f0',
    flexGrow: 1,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  noResultsText: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  topButtonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  topButton: {
    width: '30%',
    backgroundColor: '#ff4d4d',
    paddingVertical: 20,
    marginBottom: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bottomButtonsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  bottomButton: {
    width: '48%',
    backgroundColor: '#4da6ff',
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  bottomButtonText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
});
