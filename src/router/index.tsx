import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/HomePage.tsx";
import { RootLayout } from "@/layouts/RootLayout";
import ProfilePage from "@/pages/ProfilePage";

import ProtectedRoute from "@/router/protected-route";
import DetailProduct from "@/pages/DetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/product/:slug",
        element: <DetailProduct />,
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
