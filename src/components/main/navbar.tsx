import { Box, Center, Flex, Image } from "@chakra-ui/react";
import { MenuBar } from "@/components/main/menu-bar";
import Logo from "@/assets/images/logo.svg";
import { Section } from "./section";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Box as="header" className="flex flex-col">
      <Center
        as="section"
        bg="primary.400"
        h="10"
        color="white"
        fontWeight={600}
        fontSize={18}
      >
        Free Shipping + 30-Day Guarantee
      </Center>
      <Box as="nav" className="w-full border-b border-gray-300 py-2">
        <Box className="md:max-w-screen-2xl mx-auto">
          <Flex align="center" justify="space-between" className="p-4 lg:p-2">
            <Image
              src={Logo}
              alt="logo"
              w={[120, 160, 180]}
              cursor="pointer"
              onClick={() => navigate("/")}
            />
            <MenuBar />
          </Flex>
        </Box>
      </Box>
      <Section />
    </Box>
  );
};
