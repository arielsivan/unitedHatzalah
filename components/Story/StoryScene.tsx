import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import Character from './Character';
import DialogBalloon from './DialogBalloon';
import ChoiceQuestion from './ChoiceQuestion';
import { CustomButton } from '../ui/CustomButton';
import { mockDialogSteps } from '@/mocks/story';

const StoryScene = () => {
  const [step, setStep] = useState(0);

  const dialogSteps = mockDialogSteps;

  const handleChoice = (choice: string, correctAnswer: string) => {
    if (choice === correctAnswer) {
      Alert.alert('Correct!', 'נכון!');
    } else {
      Alert.alert('incorrect!', 'לא נכון!');
    }
    if (step < dialogSteps.length - 1) {
      setStep(step + 1);
    } else {
      console.log('Scenario complete!');
    }
  };

  const handleNext = () => {
    if (step < dialogSteps.length - 1) {
      setStep(step + 1);
    } else {
      console.log('Story finished!');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.dialogContainer}>
        {dialogSteps.slice(0, step + 1).map((dialog, index) => {
          if (dialog.type === 'question' && step !== index) return <></>;
          if (dialog.type === 'question' && step === index) {
            return (
              <ChoiceQuestion
                key={index}
                question={dialog.text}
                choices={dialog.choices}
                onSelect={(choice: string) =>
                  handleChoice(choice, dialog.correctAnswer)
                }
              />
            );
          }
          return (
            <DialogBalloon
              key={index}
              text={dialog.text}
              position={dialog.position}
              characterUrl={dialog.characterUrl}
            />
          );
        })}
      </ScrollView>
      {step < dialogSteps.length &&
        dialogSteps[step].type !== 'question' &&
        step !== dialogSteps.length - 1 && (
          <View style={{ display: 'flex', flexDirection: 'row', gap: 16 }}>
            <CustomButton title="המשך" handlePress={handleNext} />
          </View>
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  dialogContainer: {
    flex: 1,
    width: '100%',
  },
});

export default StoryScene;
