import * as yup from "yup";

export const formSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required().min(8, "minumum of 8 characters"),
});

export const signUpSchema = yup.object({
  Firstname: yup.string().required(),
  Lastname: yup.string().required(),
  email: yup.string().email().required(),
  number: yup.number().required().min(11, "please input a valid number"),
  occupation: yup.string().required(),
  occupationno: yup.string().required().min(2, "minumum of 2 characters"),
  password: yup.string().required().min(8, "minumum of 8 characters"),
});

export const ReferSchema = yup.object({
  Heamatology: yup.string().required(),
  Microbiology: yup.string().required(),
  Clinicalchemistry: yup.string().required(),
  Ultrasound: yup.string().required(),
  Xray: yup.string().required(),
});
