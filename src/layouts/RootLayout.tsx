import { Navbar } from "@/components/main/navbar";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
};
