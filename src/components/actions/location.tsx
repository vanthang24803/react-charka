import { Flex, Hide, Text } from "@chakra-ui/react";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const Location = () => {
  return (
    <Hide below="md">
      <Link to="locations">
        <Flex align="center" gap={2}>
          <MapPin size={28} strokeWidth="1.75" />
          <Flex align="start" flexDirection="column">
            <Text fontSize="sm" as="p" fontWeight="600">
              Store Locator
            </Text>
            <Text fontSize="xs" as="i" color="gray.500">
              My Plant Shop
            </Text>
          </Flex>
        </Flex>
      </Link>
    </Hide>
  );
};
