import { Stack, Image, Text } from "@chakra-ui/react";
import The from "@/assets/images/the.svg";
import Sill from "@/assets/images/sill.svg";

export const Footer = () => {
  return (
    <footer className="bg-[#f9f8f7]">
      <Stack className="p-8" direction="column">
        <div className="flex items-center justify-between">
          <Image src={The} />
          <Image src={Sill} />
        </div>
        <hr className="h-[1px] bg-neutral-600" />
        <Text mt={3}>Copyright 2024 - The Sill, Inc.</Text>
      </Stack>
    </footer>
  );
};
