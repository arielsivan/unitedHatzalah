import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import BackArrow from '@/components/ui/BackArrow'; // Replace with your actual component
import CustomInput from '@/components/ui/CustomInput'; // Replace with your actual component
import community from '@/mocks/community';
import ScrollToTopContainer from '@/components/ui/ScrollToTopContainer';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Community() {
  const { id } = useLocalSearchParams();
  const card = community.find((card) => card.id.toString() === id);
  const dialog = card?.messages || [];

  const [messages, setMessages] = useState(dialog); // Local state for messages
  const [newMessage, setNewMessage] = useState(''); // Local state for the input field

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    setMessages([
      ...messages,
      {
        id: (messages.length + 1).toString(),
        sender: 'You',
        message: newMessage,
      },
    ]);
    setNewMessage('');
  };

  return (
    <ImageBackground
      source={require('@/assets/chat-bg.jpg')} // עדכן את הנתיב לפי המיקום המדויק
      style={styles.background}
    >
      <View style={styles.container}>
        <BackArrow />
        <Text style={styles.header}>{card?.title || 'No Title Available'}</Text>

        <ScrollToTopContainer contentContainerStyle={styles.chatContainer}>
          {messages.map((msg) => (
            <View
              key={msg.id}
              style={[
                styles.messageBubble,
                msg.sender === 'You' ? styles.currentUser : styles.otherUser,
              ]}
            >
              <Text style={styles.messageSender}>{msg.sender}</Text>
              <Text style={styles.messageText}>{msg.message}</Text>
            </View>
          ))}
        </ScrollToTopContainer>

        <CustomInput
          sendInput={true}
          placeholder="הקלד הודעה..."
          // value={newMessage}
          handleTextChange={setNewMessage}
          // onSubmitEditing={handleSendMessage}
          // style={styles.input}
          // showSendButton // Optional: Add a send button on the right of the input
          // sendButtonAction={handleSendMessage}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  sendButton: {
    marginLeft: 15,
    borderRadius: 50,
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  container: {
    ...StyleSheet.absoluteFillObject, // ממלא את כל המסך
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // צבע לבן עם שקיפות של 30%
    flex: 1,
    // backgroundColor: '#F9F9F9',
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF5722', // United Hatzala orange
    textAlign: 'center',
    marginBottom: 16,
  },
  chatContainer: {
    flexGrow: 1,
    paddingBottom: 16,
  },
  messageBubble: {
    maxWidth: '75%',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  currentUser: {
    backgroundColor: '#DCF8C6', // Light green
    alignSelf: 'flex-start', // Align to left
  },
  otherUser: {
    backgroundColor: '#FFFFFF', // White
    borderColor: '#E0E0E0',
    borderWidth: 1,
    alignSelf: 'flex-end', // Align to right
  },
  
  messageSender: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 4,
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
  input: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#DDD',
    padding: 8,
  },
});
