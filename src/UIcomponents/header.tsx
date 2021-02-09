import React, { Component } from "react";
import { Text, View } from "react-native";
import { HeaderProps } from "../interface/interface";
import { headerstyle } from "../styles/Styles";

export default function Header({ title }: HeaderProps) {
  return (
    <View style={headerstyle.container}>
      <Text style={headerstyle.header}>{title}</Text>
    </View>
  );
}
