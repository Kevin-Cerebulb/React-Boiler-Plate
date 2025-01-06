import * as yup from "yup";

/**
 * Form Schema
 */
export const FormSchema = yup
  .object({
    email: yup
      .string()
      .email("Enter a valid Email")
      .required("Please enter your email"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters.")
      .required("Please enter your Password"),
    // confirmPassword: yup
    //   .string()
    //   .oneOf([yup.ref("password"), null], "Passwords must match")
    //   .required("Please confirm your password"),
    select: yup
      .array()
      .of(
        yup.object({
          label: yup.string().required(),
          value: yup.string().required(),
        })
      ).required("Please select an option"),
  }).required();

export const LoginSchema = yup
  .object({
    email: yup
      .string()
      .email("Enter a valid Email")
      .required("Please enter your email"),
    password: yup
      .string()
      .min(3, "Password must be at least 8 characters.")
      .required("Please enter your Password"),
  })
  .required();
