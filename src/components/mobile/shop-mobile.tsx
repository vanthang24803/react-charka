import { Button, Text, useDisclosure } from "@chakra-ui/react";
import { MenuIcon } from "lucide-react";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

export const ShopMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        w="50%"
        rounded="none"
        gap={2}
        bgColor="#f9f8f7"
        borderRight={2}
        borderColor="gray.200"
        onClick={onOpen}
      >
        <MenuIcon />
        <Text fontSize={14}>Shop</Text>
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="left"
        size={["xs", "sm"]}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent bgColor="#f9f8f7">
          <DrawerCloseButton color="white" />
          <DrawerHeader
            className="w-full h-16 text-white bg-primary"
            fontSize={16}
          >
            Shop
          </DrawerHeader>

          <DrawerBody>
            <Text>Hello World</Text>
          </DrawerBody>
          <DrawerFooter display="flex" justifyContent="space-between" gap={2}>
            <Button colorScheme="green" flexBasis="50%" rounded="none">
              My Account
            </Button>
            <Button
              color="primary.400"
              flexBasis="50%"
              rounded="none"
              bgColor="white"
            >
              Store Locator
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
