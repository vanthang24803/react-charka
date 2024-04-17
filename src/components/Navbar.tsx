import { Box, Center, Flex, Image } from "@chakra-ui/react";
import { MenuBar } from "@/components/menu-bar";

export const Navbar = () => {
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
          <Flex
            align="center"
            justify="space-between"
            className="p-4 lg:p-2"
          >
            <Image
              src="https://cdn.sanity.io/images/y346iw48/production/1af82117dcf52d35da53ba107d273d4e32d36c05-182x36.svg?w=182&h=36&auto=format"
              alt="logo"
              w={[120, 160, 180]}
              cursor="pointer"
            />
            <MenuBar />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
