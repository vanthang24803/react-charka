import { Flex, Text, Hide, Show, useDisclosure } from "@chakra-ui/react";
import { SearchIcon } from "lucide-react";
import { SearchContent } from "./search-content";

export const Search = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Hide below="md">
        <Flex align="center" gap={2} onClick={onOpen}>
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
        <SearchContent isOpen={isOpen} onClose={onClose} />
      </Hide>
      <Show below="md">
        <Flex align="center" gap="2" onClick={onOpen}>
          <SearchIcon size="20" />
          <Text fontSize="sm">Search</Text>
        </Flex>
        <SearchContent isOpen={isOpen} onClose={onClose} />
      </Show>
    </>
  );
};
