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
import { toast } from "react-hot-toast";

export const LoginForm = () => {
  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email")
      .required("Email is required")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        "Invalid email format"
      ),
    password: yup.string().required("Password is required"),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={loginSchema}
      onSubmit={(values) => {
        console.log(values);
        toast.success("Hello World")
      }}
    >
      {({ handleSubmit, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="flex-start">
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

            <Button
              type="submit"
              colorScheme="green"
              width="full"
              h="50px"
              rounded="none"
            >
              Login
            </Button>
          </VStack>
        </form>
      )}
    </Formik>
  );
};
