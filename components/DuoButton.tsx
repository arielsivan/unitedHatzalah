import React from "react";
import { Button, Pressable, StyleSheet, View,Text } from 'react-native';
import { ThemedText } from './ThemedText';

interface Props { 
    title : string;
    handelPress : () => void;
}

export function DuoButton(props : Props) {

    return (
        <View>
        <Pressable 
                style={({ pressed }) => [
                    styles.button,
                    pressed && styles.buttonPressed,
                ]}
                onPress={props.handlePress}>
            <Text style={styles.text}>{props.title}</Text>
        </Pressable>
        <Text></Text>
        <Pressable 
                style={({ pressed }) => [
                    styles.round,
                    pressed && styles.buttonRoundPressed,
                ]}
                onPress={() => {}}>
            <ThemedText style={styles.text}>💉</ThemedText>
        </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    lineHeight: 32,
    margin: 10,
    // font : "20px white",
    fontWeight : "bold",
    color: "white",
  },
  button:{
    width : 100,
    backgroundColor : "#58cc02",
    boxShadow: "0 5px 0 #58a700",
    borderRadius: 10,
    alignItems: 'center'
  },
  buttonPressed : {
    boxShadow : "none",
    transform : "translateY(5px)"
  },
  round : {
    backgroundColor : "#ddf4ff",
    boxShadow: "0 5px 0 #1cb0f6",
    borderRadius : 100,
    width : 65,
    height : 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonRoundPressed : {
    boxShadow : "none",
    transform : "translateY(5px)"
  }
  
});
