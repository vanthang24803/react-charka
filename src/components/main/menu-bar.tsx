import { Stack } from "@chakra-ui/react";

import { Search } from "@/components/actions/search/search";
import { AuthActions } from "@/components/actions/auth/auth-actions";
import { Cart } from "@/components/actions/cart/cart";
import { Location } from "@/components/actions/location";
import useAuth from "@/hooks/use-auth";
import { ProfileActions } from "../actions/auth/profile-actions";

export const MenuBar = () => {
  const { isLogin } = useAuth();

  return (
    <Stack
      spacing={["1.25rem", "1.5rem", "2rem"]}
      cursor="pointer"
      direction="row"
    >
      <Location />
      <Search />
      {isLogin ? <ProfileActions /> : <AuthActions />}
      <Cart />
    </Stack>
  );
};
