import { StyleSheet, Text, View } from "react-native";
import { DuoHeart } from "./DuoHeart";
import { DuoProgress } from "./DuoProgress";
import DuoCross from "./DuoCross";
import { DuoChoice } from "./DouChoice";
import { DuoButton } from "./DuoButton";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    // padding: 16,
    alignItems: "center",
    justifyContent: "center",
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
        <DuoCross></DuoCross>
        <DuoProgress></DuoProgress>
        <DuoHeart></DuoHeart>
        <DuoHeart></DuoHeart>
      </View>
      <DuoButton title={""} handlePress={function (): void {
              throw new Error("Function not implemented.");
          } }></DuoButton>
      <DuoChoice></DuoChoice>
    </View>
  );
};

