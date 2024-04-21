import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { Navbar } from "@/components/main/navbar";
import { Provider } from "@/components/providers";

import useAuth from "@/hooks/use-auth";

export const RootLayout = () => {
  const { refreshToken, isLogin, profile, checkExpiry } = useAuth();

  useEffect(() => {
    if (isLogin) {
      setInterval(() => {
        refreshToken();
      }, 2000);

      profile();
      checkExpiry();
    }
  }, []);

  return (
    <main>
      <Provider />
      <Navbar />
      <Outlet />
    </main>
  );
};
