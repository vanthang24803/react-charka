import { Navbar } from "@/components/main/navbar";
import { Provider } from "@/components/providers";
import useAuth from "@/hooks/use-auth";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  const { refreshToken, isLogin } = useAuth();

  useEffect(() => {
    if (isLogin) {
      setInterval(() => {
        refreshToken();
      }, 5000);
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
