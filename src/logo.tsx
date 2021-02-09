import React from "react";
import { View, ImageBackground, Image } from "react-native";
import { styles } from "./styles/Styles";
import * as svg from "react-native-svg";

export default function Logo() {
  return (
    <View>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
    </View>
  );
}
