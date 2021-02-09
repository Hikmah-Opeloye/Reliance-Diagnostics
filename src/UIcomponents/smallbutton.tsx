import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { styles } from "../styles/Styles";

export default function SmallButton({ text, onPress }: any) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.smallbutton}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
