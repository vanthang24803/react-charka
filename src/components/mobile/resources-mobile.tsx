import {
  Button,
  Text,
  useDisclosure,
  DrawerHeader,
  Image,
  Heading,
  Stack,
} from "@chakra-ui/react";
import Tree from "@/assets/images/tree.svg";
import Clock from "@/assets/images/clock.svg";
import Map from "@/assets/images/map.svg";
import Bookmark from "@/assets/images/bookmark.webp";

import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

const resources = [
  {
    image: Map,
    title: "Store Locator",
    desc: "Visit us IRL in one of our local shops.",
    path: "/",
  },
  {
    image: Clock,
    title: "Find Your Match",
    desc: "Take this quiz to find your plant match",
    path: "/",
  },
  {
    image: Tree,
    title: "Plant Care Library",
    desc: "Care guides for all your plants, A to Z",
    path: "/",
  },
  {
    image: Bookmark,
    title: "Blog & Resources",
    desc: "Plants 101, common care questions, & more",
    path: "/",
  },
];

export const links = [
  {
    title: "30-Day Guarantee",
    desc: "Your plants will arrive in happy, healthy condition- guaranteed.",
    url: "/",
  },
  {
    title: "Shipping & Handling",
    desc: "Delivery Estimates and Shipping Cutoffs",
    url: "/",
  },
  {
    title: "Frequently Asked Questions",
    desc: "Answers to common questions",
    url: "/",
  },
  {
    title: "Contact Us",
    desc: "Live Chat: Monday-Friday 9am-9pm ET",
    url: "/",
  },
];

export const Resources = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        w="50%"
        rounded="none"
        gap={2}
        bgColor="#f9f8f7"
        borderRight={2}
        borderColor="gray.200"
        onClick={onOpen}
      >
        <Image src={Tree} />
        <Text fontSize={14}>Resources</Text>
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        size={["xs", "sm"]}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent bgColor="#f9f8f7">
          <DrawerCloseButton color="white" />
          <DrawerHeader
            className="w-full h-16 text-white bg-primary"
            fontSize={16}
          >
            Help & Resources
          </DrawerHeader>

          <DrawerBody mt={8}>
            <Stack direction="column" gap={6}>
              <Heading fontSize={22} as="h3" fontWeight={500}>
                Plant Care Resources
              </Heading>
              <Stack direction="column" gap={8}>
                {resources.map((item, index) => (
                  <Link to={item.path} key={index}>
                    <Stack
                      direction="row"
                      alignItems="start"
                      justifyContent="space-between"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        className="w-6 h-6 object-contain"
                        mr={2}
                      />
                      <Stack direction="column" gap={2}>
                        <Text as="b">{item.title}</Text>
                        <Text as="i" fontSize={13}>
                          {item.desc}
                        </Text>
                      </Stack>
                      <MoveRight
                        strokeWidth={2}
                        className="translate-x-2 transition-all ease-in-out"
                      />
                    </Stack>
                  </Link>
                ))}
              </Stack>

              <Heading fontSize={22} as="h3" fontWeight={500} mt={8}>
                Customer Service Help
              </Heading>
              <Stack direction="column" gap={8} mb={4}>
                {links.map((item, index) => (
                  <Link to={item.url} key={index}>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Stack direction="column" gap={2}>
                        <Text as="b">{item.title}</Text>
                        <Text as="i" fontSize={13}>
                          {item.desc}
                        </Text>
                      </Stack>
                      <MoveRight
                        strokeWidth={2}
                        className="translate-x-2 transition-all ease-in-out"
                      />
                    </Stack>
                  </Link>
                ))}
              </Stack>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
