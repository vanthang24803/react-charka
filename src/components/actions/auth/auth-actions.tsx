import { Flex, Text, Hide, Show, Image, useDisclosure } from "@chakra-ui/react";
import UserIcon from "@/assets/images/user.svg";
import { LoginModal } from "./login-modal";

export const AuthActions = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Hide below="md">
        <Flex align="center" gap={2} onClick={onOpen}>
          <Flex as="a" align="start" flexDirection="column">
            <Text fontSize="sm" as="p" fontWeight="600">
              Hello, Sign In
            </Text>
            <Text fontSize="xs" as="i" color="gray.500">
              Your Account
            </Text>
          </Flex>
        </Flex>
        <LoginModal  isOpen={isOpen} onClose={onClose} size="md"/>
      </Hide>
      <Show below="md">
        <Image src={UserIcon} alt="user" boxSize="20px" />
      </Show>
    </>
  );
};
