import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    textAlign: "center",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: 24,
  },
  header: {
    backgroundColor: "pink",
    padding: 20,
  },
  body: {
    backgroundColor: "#ab47bc",
    padding: 20,
  },
  button: {
    backgroundColor: "green",
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    marginTop: 40,
  },
  smallbutton: {
    backgroundColor: "green",
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    marginTop: 40,
    marginBottom: 40,
    width: 200,
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    textTransform: "uppercase",
  },
  logo: {
    // backgroundColor: "plum",
    //width: 250,
    //height: 100,
  },
});

export const formstyles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    fontSize: 18,
    borderRadius: 6,
    margin: 5,
  },
  button: {
    padding: 10,
  },
  error: {
    color: "red",
    margin: 5,
    textAlign: "center",
  },
  subheading: {
    textAlign: "center",
    padding: 5,
    margin: 10,
  },
  text: {
    margin: 5,
    textAlign: "center",
  },
});

export const headerstyle = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: "purple",
  },
  header: {
    backgroundColor: "green",
    padding: 20,
    fontSize: 25,
    color: "#fff",
    alignItems: "center",
  },
  body: {
    backgroundColor: "#ab47bc",
    padding: 20,
  },
});
