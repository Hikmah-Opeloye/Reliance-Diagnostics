import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { styles } from "../styles/Styles";

export default function FlatButton({ text, onPress }: any) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
