import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import { MapPin } from "lucide-react";

export const Navbar = () => {
  return (
    <Box as="header" className="flex flex-col">
      <Center bg="#009a7b" h="10" color="white" fontWeight={600} fontSize={18}>
        Free Shipping + 30-Day Guarantee
      </Center>
      <Flex
        align="center"
        justify="space-between"
        p={8}
        borderBottom={2}
        borderBottomColor="gray"
      >
        <Image src="https://cdn.sanity.io/images/y346iw48/production/1af82117dcf52d35da53ba107d273d4e32d36c05-182x36.svg?w=182&h=36&auto=format" />
        <Flex align="center">
          <Flex align="center" gap={2}>
            <MapPin size={32} />
            <Flex as="a" align="start" flexDirection="column">
              <Text fontSize="sm" as="b">
                Store Locator
              </Text>
              <Text fontSize="xs" as="i">
                My Plant Shop
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
