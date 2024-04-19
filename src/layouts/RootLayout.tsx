import { Navbar } from "@/components/main/navbar";
import { Provider } from "@/components/providers";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <main>
      <Provider/>
      <Navbar />
      <Outlet />
    </main>
  );
};
