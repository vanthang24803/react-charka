import { Formik, Field } from "formik";
import * as yup from "yup";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  VStack,
  Input,
  Button,
} from "@chakra-ui/react";

export const RegisterForm = () => {
  const registerSchema = yup.object().shape({
    firstName: yup
      .string()
      .required("First name is required")
      .min(3, "First name must be at least 3 characters long")
      .max(20, "First name can't be longer than 30 characters"),
    lastName: yup
      .string()
      .required("Last name is required")
      .min(3, "Last name must be at least 3 characters long")
      .max(20, "Last name can't be longer than 30 characters"),
    email: yup
      .string()
      .email("Invalid email")
      .required("Email is required")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        "Invalid email format"
      ),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Z]).{6,}$/,
        "Password must be at least 6 characters long and contain at least one uppercase letter"
      ),
    confirmPassword: yup
      .string()
      .required("Confirm password is required")
      .oneOf([yup.ref("password")]),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        confirmPassword: "",
      }}
      validationSchema={registerSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleSubmit, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <VStack spacing={3} align="flex-start">
            <FormControl isInvalid={!!errors.firstName && touched.firstName}>
              <FormLabel htmlFor="email">First name</FormLabel>
              <Field
                as={Input}
                id="firstName"
                name="firstName"
                type="text"
                placeholder="May"
                height="50px"
                rounded="none"
                width="full"
              />
              <FormErrorMessage>{errors.firstName}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.lastName && touched.lastName}>
              <FormLabel htmlFor="email">Last name</FormLabel>
              <Field
                as={Input}
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Nguyen"
                height="50px"
                rounded="none"
                width="full"
              />
              <FormErrorMessage>{errors.lastName}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.email && touched.email}>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Field
                as={Input}
                id="email"
                name="email"
                type="email"
                placeholder="mail@example.com"
                height="50px"
                rounded="none"
                width="full"
              />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.password && touched.password}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Field
                as={Input}
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                width="full"
                height="50px"
                rounded="none"
              />
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={!!errors.confirmPassword && touched.confirmPassword}
            >
              <FormLabel htmlFor="password">Confirm Password</FormLabel>
              <Field
                as={Input}
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                width="full"
                height="50px"
                rounded="none"
              />
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>

            <Button
              type="submit"
              colorScheme="green"
              width="full"
              h="50px"
              rounded="none"
            >
              Register
            </Button>
            
          </VStack>
        </form>
      )}
    </Formik>
  );
};
