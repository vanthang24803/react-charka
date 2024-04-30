import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { Navbar } from "@/components/main/navbar";
import { Provider } from "@/components/providers";

import useAuth from "@/hooks/use-auth";
import { Seo } from "@/components/seo";

export const RootLayout = () => {
  const { refreshToken, isLogin, profile, checkExpiry } = useAuth();

  useEffect(() => {
    if (isLogin) {
      const interval = setInterval(() => {
        refreshToken();
      }, 10000);

      profile();
      checkExpiry();

      return () => {
        clearInterval(interval);
      };
    }
  }, [isLogin]);

  return (
    <main>
       <Seo
        title="The Sill | Buy Plants Online"
        description="Easy-care indoor plants, pots & planters, plant care accessories, and more delivered to your door. Free Shipping. 30-Day Guarantee."
      />
      <Provider />
      <Navbar />
      <Outlet />
    </main>
  );
};
