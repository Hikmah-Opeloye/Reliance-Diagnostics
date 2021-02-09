import React from "react";
import { TextInput, View, Text, ScrollView, FlatList } from "react-native";
//import logo from "../UIassests/logo.svg";
import Header from "../UIcomponents/header";
import { Formik } from "formik";
import { signUpSchema } from "../interface/validation";
import FlatButton from "../UIcomponents/button";
import { formstyles } from "../styles/Styles";
import Logo from "../logo";

export default function SignUp() {
  return (
    <View>
      <Header title="Create an account" />

      <ScrollView>
        <View style={formstyles.container}>
          <Formik
            initialValues={{
              Firstname: "",
              Lastname: "",
              email: "",
              number: "",
              occupation: "",
              occupationno: "",
              password: "",
            }}
            validationSchema={signUpSchema}
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
                  placeholder="First Name"
                  onChangeText={props.handleChange("Firstname")}
                  value={props.values.Firstname}
                  onBlur={props.handleBlur("Firstname")}
                />
                <Text style={formstyles.error}>
                  {props.touched.Firstname && props.errors.Firstname}
                </Text>

                <TextInput
                  style={formstyles.input}
                  placeholder="Last Name"
                  onChangeText={props.handleChange("Lastname")}
                  value={props.values.Lastname}
                  onBlur={props.handleBlur("Lastname")}
                />
                <Text style={formstyles.error}>
                  {props.touched.Lastname && props.errors.Lastname}
                </Text>

                <TextInput
                  style={formstyles.input}
                  placeholder="Number"
                  onChangeText={props.handleChange("number")}
                  value={props.values.number}
                  onBlur={props.handleBlur("number")}
                />
                <Text style={formstyles.error}>
                  {props.touched.number && props.errors.number}
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
                  placeholder="Occupation"
                  onChangeText={props.handleChange("occupation")}
                  value={props.values.occupation}
                  onBlur={props.handleBlur("occupation")}
                />
                <Text style={formstyles.error}>
                  {props.touched.occupation && props.errors.occupation}
                </Text>

                <TextInput
                  style={formstyles.input}
                  placeholder="Occupation No"
                  onChangeText={props.handleChange("occupationno")}
                  value={props.values.occupationno}
                  onBlur={props.handleBlur("occupationno")}
                />
                <Text style={formstyles.error}>
                  {props.touched.occupationno && props.errors.occupationno}
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

                <FlatButton text="Sign Up" onPress={props.handleSubmit} />
                <Text style={formstyles.text}>Already have an account?</Text>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </View>
  );
}
