import React from "react";
import { TextInput, View, Text, Image } from "react-native";
//import logo from "../UIassests/logo.svg";
import Header from "../UIcomponents/header";
import { Formik } from "formik";
import { formSchema } from "../interface/validation";
import FlatButton from "../UIcomponents/button";
import { formstyles } from "../styles/Styles";

export default function SignIn() {
  return (
    <View>
      <Header title="Sign In" />

      <View style={formstyles.container}>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={formSchema}
          onSubmit={(values, actions) => {
            actions.resetForm();
            console.log(values);
          }}
        >
          {(props) => (
            <View>
              <Text style={formstyles.subheading}>
                Please enter your credentials to proceed
              </Text>

              <TextInput
                style={formstyles.input}
                placeholder="Email"
                onChangeText={props.handleChange("email")}
                value={props.values.email}
                onBlur={props.handleBlur("email")}
              />
              <Text style={formstyles.error}>
                {props.touched.email && props.errors.email}
              </Text>

              <TextInput
                style={formstyles.input}
                placeholder="Password"
                onChangeText={props.handleChange("password")}
                value={props.values.password}
                onBlur={props.handleBlur("password")}
              />
              <Text style={formstyles.error}>
                {props.touched.password && props.errors.password}
              </Text>

              <FlatButton text="Sign In" onPress={props.handleSubmit} />

              <Text style={formstyles.text}>Forgot Password?</Text>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
}
