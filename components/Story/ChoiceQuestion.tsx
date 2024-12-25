import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const ChoiceQuestion = ({ question, choices, onSelect } : any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>
      {choices.map((choice : string, index : number) => (
        <TouchableOpacity
          key={index}
          style={styles.choice}
          onPress={() => onSelect(choice)}
        >
          <Text style={styles.choiceText}>{choice}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  question: {
    fontSize: 18,
    marginBottom: 10,
  },
  choice: {
    backgroundColor: '#d0f0c0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  choiceText: {
    fontSize: 16,
  },
});

export default ChoiceQuestion;
