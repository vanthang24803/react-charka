import {
  Flex,
  Button,
  Text,
  Box,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import IconTree from "@/assets/images/tree.svg";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

export const Resources = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button w="50%" rounded="none" gap={2} bgColor="#f9f8f7" onClick={onOpen}>
        <Image src={IconTree} alt="icon" boxSize="20px" />
        <Text>Resources</Text>
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        size={["xs", "sm"]}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent bgColor="#f9f8f7" pt={20} px={4}>
          <DrawerCloseButton    />

          <DrawerBody>
            <Text>Hello World</Text>
          </DrawerBody>
         
        </DrawerContent>
      </Drawer>
    </>
  );
};
