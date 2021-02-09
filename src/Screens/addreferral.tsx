import { Formik } from "formik";
import React from "react";
import { ScrollView, TextInput, View, Text } from "react-native";
import Header from "../UIcomponents/header";
import { ReferSchema } from "../interface/validation";
import { formstyles } from "../styles/Styles";
import FlatButton from "../UIcomponents/button";
import SmallButton from "../UIcomponents/smallbutton";

export default function AddReferral() {
  return (
    <View>
      <Header title="Refer a Patient" />

      <ScrollView>
        <SmallButton text="Add Patient" />

        <View style={formstyles.container}>
          <Formik
            initialValues={{
              Heamatology: "",
              Microbiology: "",
              Clinicalchemistry: "",
              Ultrasound: "",
              Xray: "",
            }}
            validationSchema={ReferSchema}
            onSubmit={(values, actions) => {
              actions.resetForm();
              console.log(values);
            }}
          >
            {(props) => (
              <View>
                <Text style={formstyles.subheading}>Please select tests</Text>

                <TextInput
                  style={formstyles.input}
                  placeholder="Heamatology"
                  onChangeText={props.handleChange("Heamatology")}
                  value={props.values.Heamatology}
                  onBlur={props.handleBlur("Heamatology")}
                />
                <Text style={formstyles.error}>
                  {props.touched.Heamatology && props.errors.Heamatology}
                </Text>

                <TextInput
                  style={formstyles.input}
                  placeholder="Microbiology"
                  onChangeText={props.handleChange("Microbiology")}
                  value={props.values.Microbiology}
                  onBlur={props.handleBlur("Microbiology")}
                />
                <Text style={formstyles.error}>
                  {props.touched.Microbiology && props.errors.Microbiology}
                </Text>

                <TextInput
                  style={formstyles.input}
                  placeholder="Clinical chemistry"
                  onChangeText={props.handleChange("Clinicalchemistry")}
                  value={props.values.Clinicalchemistry}
                  onBlur={props.handleBlur("Clinicalchemistry")}
                />
                <Text style={formstyles.error}>
                  {props.touched.Clinicalchemistry &&
                    props.errors.Clinicalchemistry}
                </Text>

                <TextInput
                  style={formstyles.input}
                  placeholder="Ultrasound"
                  onChangeText={props.handleChange("Ultrasound")}
                  value={props.values.Ultrasound}
                  onBlur={props.handleBlur("Ultrasound")}
                />
                <Text style={formstyles.error}>
                  {props.touched.Ultrasound && props.errors.Ultrasound}
                </Text>

                <TextInput
                  style={formstyles.input}
                  placeholder="Please input type of Xray"
                  onChangeText={props.handleChange("Xray")}
                  value={props.values.Xray}
                  onBlur={props.handleBlur("Xray")}
                />
                <Text style={formstyles.error}>
                  {props.touched.Xray && props.errors.Xray}
                </Text>

                <FlatButton text="Add Referral" onPress={props.handleSubmit} />
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </View>
  );
}
