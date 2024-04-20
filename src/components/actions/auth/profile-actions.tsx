import useProfile from "@/hooks/use-profile";
import { Avatar } from "@chakra-ui/react";

export const ProfileActions = () => {
  const { data: user } = useProfile();
  return <Avatar name={user?.name} src={user?.avatar} />;
};
