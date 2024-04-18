import { Button, Flex, Box, Text, Heading, Stack } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  size: Size;
};

export const LoginModal = ({ isOpen, onClose, size }: Props) => {
  return (
    <Drawer isOpen={isOpen} size={size} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Stack direction="column" pt={8}>
            <Heading fontSize="1.5rem" size="lg">
              Welcome To Your Sill Account
            </Heading>
            <Text fontSize="14px" fontWeight="400">
              Log into your account to manage orders and access online courses.
            </Text>
          </Stack>
        </DrawerHeader>

        <DrawerBody>
          <Text>Hello World</Text>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
