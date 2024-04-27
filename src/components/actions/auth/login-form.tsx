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
import { useState } from "react";
import useAuth from "@/hooks/use-auth";
import { useNavigate } from "react-router-dom";


export const LoginForm = () => {
  const auth = useAuth();
  const [loading, setLoading] = useState(false);
  const router = useNavigate();

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
        setLoading(true);
        const { email, password } = values;
        auth.login(email, password);
        setLoading(false);
        router("/", { replace: true });
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
                isDisabled={loading}
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
                height="50px"
                rounded="none"
                isDisabled={loading}
              />
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>

            <Button
              isLoading={loading}
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
