import { Flex, Text, Hide, Show } from "@chakra-ui/react";
import { SearchIcon } from "lucide-react";

export const Search = () => {
  return (
    <>
      <Hide below="md">
        <Flex align="center" gap={2}>
          <SearchIcon size={28} strokeWidth="1.75" />
          <Flex align="start" flexDirection="column">
            <Text fontSize="sm" as="p" fontWeight="600">
              Find Product
            </Text>
            <Text fontSize="xs" as="i" color="gray.500">
              Quick Search
            </Text>
          </Flex>
        </Flex>
      </Hide>
      <Show below="md">
        <Flex align="center" gap="2">
          <SearchIcon size="20" />
          <Text fontSize="sm">Search</Text>
        </Flex>
      </Show>
    </>
  );
};
