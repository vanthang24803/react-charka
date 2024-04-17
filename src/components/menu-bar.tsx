import { Flex, HStack, Text, Hide, Image } from "@chakra-ui/react";
import { MapPin, Search } from "lucide-react";
import { Link } from "react-router-dom";

import Cart from "@/assets/images/cart.svg";

export const MenuBar = () => {
  const num = 0;

  return (
    <Hide below="sm">
      <HStack spacing="2rem" cursor="pointer">
        <Link to="locations">
          <Flex align="center" gap={2}>
            <MapPin size={28} strokeWidth="1.75" />
            <Flex as="a" align="start" flexDirection="column">
              <Text fontSize="sm" as="p" fontWeight="600">
                Store Locator
              </Text>
              <Text fontSize="xs" as="i" color="gray.500">
                My Plant Shop
              </Text>
            </Flex>
          </Flex>
        </Link>
        <Flex align="center" gap={2}>
          <Search size={28} strokeWidth="1.75" />
          <Flex as="a" align="start" flexDirection="column">
            <Text fontSize="sm" as="p" fontWeight="600">
              Find Product
            </Text>
            <Text fontSize="xs" as="i" color="gray.500">
              Quick Search
            </Text>
          </Flex>
        </Flex>
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
        <Flex align="center" gap={2}>
          <Image src={Cart} alt="cart" />
          <Text color="gray.700" fontSize="small">
            ({num})
          </Text>
        </Flex>
      </HStack>
    </Hide>
  );
};
