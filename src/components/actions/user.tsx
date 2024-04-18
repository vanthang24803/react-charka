import { Flex, Text, Hide, Show, Image } from "@chakra-ui/react";
import UserIcon from "@/assets/images/user.svg";

export const User = () => {
  return (
    <>
      <Hide below="md">
        <Flex align="center" gap={2}>
          <Flex as="a" align="start" flexDirection="column">
            <Text fontSize="sm" as="p" fontWeight="600">
              Hello, Sign In
            </Text>
            <Text fontSize="xs" as="i" color="gray.500">
              Your Account
            </Text>
          </Flex>
        </Flex>
      </Hide>
      <Show below="md">
        <Image src={UserIcon} alt="user" boxSize="20px" />
      </Show>
    </>
  );
};
