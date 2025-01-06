import * as yup from "yup";

export const LoginSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid Email")
    .required("Please enter your email"),
  password: yup
    .string()
    .min(3, "Password must be at least 8 characters.")
    .required("Please enter your Password"),
}).required()
