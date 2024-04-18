import { Button, Flex, Box, Text, Heading } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  num: number;
  onClose: () => void;
  size: Size;
};

export const CartContent = ({ isOpen, num, onClose, size }: Props) => {
  return (
    <Drawer isOpen={isOpen} size={size} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Your Cart ({num})</DrawerHeader>

        <DrawerBody>
          {num === 0 ? (
            <Text>Your cart is empty</Text>
          ) : (
            <Text>Hello World</Text>
          )}
        </DrawerBody>

        <DrawerFooter>
          <Box className="border-t border-neutral-300 w-full pt-4 flex flex-col space-y-1.5">
            <Flex align="center" justifyContent="space-between">
              <Heading fontSize="22px">Subtotal:</Heading>
              <Text fontSize="18px">({num.toFixed(2)}) US$</Text>
            </Flex>
            <Flex align="center" justifyContent="space-between">
              <Text fontSize="20px">Shipping:</Text>
              <Text fontSize="16px">Free</Text>
            </Flex>
            <Button
              isDisabled={num === 0}
              className="w-full"
              colorScheme="green"
              h="3rem"
            >
              {num === 0 ? (
                <Text as="i">Your Cart Is Empty</Text>
              ) : (
                <Text>Checkout</Text>
              )}
            </Button>
            <Text fontSize="14px" as="i" pt="4px" color="gray.500">
              Taxes and fees calculated at checkout.
            </Text>
          </Box>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
