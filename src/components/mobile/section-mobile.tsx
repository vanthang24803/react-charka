import { Show, Flex, Box } from "@chakra-ui/react";
import { ShopMobile } from "./shop-mobile";
import { Resources } from "./resources-mobile";

export const MobileSection = () => {
  return (
    <Show below="lg">
      <Flex
        align="center"
        justify="space-between"
        className="border-b border-gray-300"
        h="40px"
      >
        <ShopMobile />
        <Box w="1px" h="100%" bg="gray.200" />
        <Resources />
      </Flex>
    </Show>
  );
};
