import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  InputGroup,
  Stack,
  InputLeftElement,
  Text,
  Box,
} from "@chakra-ui/react";
import { Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import _http from "@/utils/http";
import { searchProducts } from "@/api/search";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const SearchContent = ({ isOpen, onClose }: Props) => {
  const [content, setContent] = useState("");

  const links = [
    {
      name: "Large Plants & Planters",
      value: "/",
    },
    {
      name: "Pet-Friendly Plants",
      value: "/",
    },
    {
      name: "Digital Gift Card",
      value: "/",
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const { data: products, isLoading } = useQuery({
    queryKey: ["search"],
    queryFn: () => searchProducts(content),
  });

  return (
    <Drawer
      isOpen={isOpen}
      size={["xs", "md"]}
      placement="right"
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />

        <DrawerBody my={16}>
          <Stack
            spacing={4}
            direction="row"
            align="center"
            justifyContent="center"
          >
            <InputGroup>
              <InputLeftElement pointerEvents="none" h="55px">
                <Search className="w-5 h-5" />
              </InputLeftElement>
              <Input
                h="55px"
                rounded="none"
                autoFocus
                placeholder="Search The Sill..."
                onChange={handleInputChange}
              />
            </InputGroup>
          </Stack>
          {content.length === 0 ? (
            <Box my={6}>
              <Text as="i">Popular Searches</Text>
              <Stack direction="column" gap={1} m={3}>
                {links.map((item, index) => (
                  <Link to={item.value} key={index} className="text-[15px]">
                    {item.name}
                  </Link>
                ))}
              </Stack>
            </Box>
          ) : (
            <Box>{JSON.stringify(products)}</Box>
          )}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
