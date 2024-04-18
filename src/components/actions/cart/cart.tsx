import CartIcon from "@/assets/images/cart.svg";
import { Flex, Hide, Image, Show, Text, useDisclosure } from "@chakra-ui/react";

import { CartContent } from "./cart-content";

export const Cart = () => {
  let num = 0;

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Hide below="md">
        <Flex align="center" gap={2} onClick={onOpen}>
          <Image src={CartIcon} alt="cart" />
          <Text color="gray.700" fontSize="small">
            ({num})
          </Text>
        </Flex>
        <CartContent isOpen={isOpen} onClose={onClose} num={num} size="md" />
      </Hide>
      <Show below="md">
        <Flex align="center" gap="2" onClick={onOpen}>
          <Image src={CartIcon} alt="user" boxSize="20px" />
          <Text fontSize="12px">({num})</Text>
        </Flex>
        <CartContent isOpen={isOpen} onClose={onClose} num={num} size="xs" />
      </Show>
    </>
  );
};
