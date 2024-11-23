import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { DuoHeart } from "./DuoHeart";
import { DuoCross } from "./DuoCross";
import { DuoProgress } from "./DuoProgress";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    // padding: 16,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  title: {
    fontFamily: "Nunito-Bold",
    fontSize: 24,
    paddingLeft: 16,
  },
});

export function DuoHeader(){
  return (
    <View>
      <View style={styles.row}>
        <DuoCross />
        <DuoProgress />
        <DuoHeart />
        <DuoHeart />
      </View>
    </View>
  );
};

