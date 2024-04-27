import useAuth from "@/hooks/use-auth";
import {
  Avatar,
  Stack,
  useDisclosure,
  Heading,
  Text,
  Button,
  Flex,
  Box,
} from "@chakra-ui/react";

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export const ProfileActions = () => {
  const { logout, user } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();

  const links = [
    {
      title: "Online Courses",
      desc: "Free, self-guided plant care lessons",
      url: "/",
    },
    {
      title: "Purchase History",
      desc: "View order history & track shipments",
      url: "/",
    },
    {
      title: "Account Settings",
      desc: "Update email address or reset password",
      url: "/",
    },
  ];

  return (
    <>
      <Avatar
        boxSize={[10, 12]}
        name={user?.lastName}
        src={user?.avatar}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        size={["xs", "md"]}
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Stack direction="column" pt={8} pb={4}>
              <Heading fontSize="1.5rem" size="lg">
                Welcome Back , {user?.firstName} {user?.lastName}
              </Heading>
              <Box className="flex flex-col">
                <Text fontSize="1rem" fontWeight="400">
                  The Sill customer since 2023
                </Text>
                <Link
                  to="/"
                  className="text-primary text-base font-thin italic"
                >
                  Click here for our best deals
                </Link>
              </Box>
            </Stack>
          </DrawerHeader>

          <DrawerBody>
            <Stack direction="column" gap={6} width="full" mb={16}>
              {links.map((item, index) => (
                <Link
                  to={item.url}
                  key={index}
                  className="flex items-center justify-between"
                >
                  <Stack direction="column" gap={0}>
                    <Text fontSize={16}>{item.title}</Text>
                    <Text fontSize={13}>{item.desc}</Text>
                  </Stack>
                  <ArrowRight
                    size={20}
                    className="hover:translate-x-2 transition-all ease-in-out"
                  />
                </Link>
              ))}
            </Stack>
            <Button
              width="full"
              colorScheme="green"
              rounded="none"
              h={50}
              onClick={() => {
                navigate("/profile");
                onClose();
              }}
            >
              Go To Account
            </Button>
            <Flex align="center" my={6} gap={2}>
              <Text>Not {user?.firstName}?</Text>
              <Text as="u" cursor="pointer" onClick={logout}>
                Log Out
              </Text>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
