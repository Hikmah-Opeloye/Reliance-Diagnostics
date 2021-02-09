import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import Logo from "./src/logo";
import AddReferral from "./src/Screens/addreferral";
import SignIn from "./src/Screens/sign-in";
import SignUp from "./src/Screens/sign-up";
import { styles } from "./src/styles/Styles";

export default function App() {
  return (
    <View style={styles.container}>
      <Logo />

      <AddReferral />
    </View>
  );
}
