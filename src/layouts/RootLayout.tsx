import { Navbar } from "@/components/navbar";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </body>
    </html>
  );
};
