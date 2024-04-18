import { Stack } from "@chakra-ui/react";

import { Search } from "@/components/actions/search";
import { User } from "@/components/actions/user";
import { Cart } from "@/components/actions/cart/cart";
import { Location } from "@/components/actions/location";

export const MenuBar = () => {
  return (
    <Stack
      spacing={["1.25rem", "1.5rem", "2rem"]}
      cursor="pointer"
      direction="row"
    >
      <Location />
      <Search />
      <User />
      <Cart />
    </Stack>
  );
};
