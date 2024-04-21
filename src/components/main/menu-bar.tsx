import { Search } from "@/components/actions/search/search";
import { AuthActions } from "@/components/actions/auth/auth-actions";
import { Cart } from "@/components/actions/cart/cart";
import { Location } from "@/components/actions/location";
import useAuth from "@/hooks/use-auth";
import { ProfileActions } from "../actions/auth/profile-actions";

export const MenuBar = () => {
  const { isLogin } = useAuth();

  return (
    <div className="flex items-center justify-center space-x-4 md:space-x-6 lg:space-x-8 hover:cursor-pointer">
      <Location />
      <Search />
      {isLogin ? <ProfileActions /> : <AuthActions />}
      <Cart />
    </div>
  );
};
