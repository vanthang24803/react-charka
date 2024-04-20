import { Text, Heading, Stack, Flex, DrawerFooter } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { LoginForm } from "./login-form";
import { useState } from "react";
import { RegisterForm } from "./register-form";
import { Link } from "react-router-dom";
import { links } from "@/constant";
import { ArrowRight } from "lucide-react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  size: Size;
};

export const AuthModal = ({ isOpen, onClose, size }: Props) => {
  const [actions, setAction] = useState("login");

  const handlerChangeActions = () => {
    if (actions == "login") {
      setAction("register");
    } else {
      setAction("login");
    }
  };

  return (
    <Drawer isOpen={isOpen} size={size} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Stack direction="column" pt={8}>
            <Heading fontSize="1.5rem" size="lg">
              {actions === "login"
                ? "Welcome To Your Sill Account"
                : "Create Your Sill Account"}
            </Heading>
            <Text fontSize="14px" fontWeight="400">
              {actions === "login"
                ? "Log into your account to manage orders and access online courses."
                : "Creating an account makes it easy to manage orders and access free online courses."}
            </Text>
          </Stack>
        </DrawerHeader>

        <DrawerBody>
          {actions === "login" ? (
            <LoginForm onClose={onClose} />
          ) : (
            <RegisterForm />
          )}

          <Stack direction="column" gap={2} mt={4}>
            <Flex alignItems="center" gap={2}>
              <Text>
                {actions === "login" ? "New here?" : "Already have an account?"}
              </Text>
              <Text
                as="u"
                fontWeight={600}
                cursor="pointer"
                onClick={handlerChangeActions}
              >
                {actions === "login" ? "Create an account" : "Login"}
              </Text>
            </Flex>
          </Stack>
        </DrawerBody>
        <DrawerFooter>
          {actions === "login" ? (
            <Stack direction="column" gap={2} mt={6} width="full" my={2}>
              {links.map((item, index) => (
                <Link
                  to={item.url}
                  key={index}
                  className="flex items-center justify-between"
                >
                  <Stack direction="column" gap={0}>
                    <Text fontSize={16}>{item.title}</Text>
                    <Text fontSize={13}>{item.desc}</Text>
                  </Stack>
                  <ArrowRight
                    size={20}
                    className="hover:translate-x-2 transition-all ease-in-out"
                  />
                </Link>
              ))}
            </Stack>
          ) : (
            <Text fontSize={14} mt={4}>
              By creating an account, I agree to receive reward program
              communications at the email address provided. View our{" "}
              <Link to="/" className="text-primary mx-1">
                Terms of Service
              </Link>
              and
              <Link to="/" className="text-primary mx-1">
                Privacy Policy for details.
              </Link>
            </Text>
          )}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
