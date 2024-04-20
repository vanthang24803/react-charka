import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import Cookies from "js-cookie";

import _http from "@/utils/http";
import toast from "react-hot-toast";

type Store = {
  checkExpiry(): unknown;
  access: string;
  refresh: string;
  refreshToken: () => void;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLogin: boolean;
};

const useAuth = create(
  persist<Store>(
    (set, get) => ({
      access: "",
      refresh: "",
      isLogin: false,
      login: async (email, password) => {
        try {
          const response = await _http.post(`/api/v1/auth/login`, {
            email: email,
            password: password,
          });

          if (response.status === 200) {
            set({
              isLogin: true,
              access: response.data.accessToken,
              refresh: response.data.refreshToken,
            });

            toast.success("Success");

            Cookies.set("access", response.data.accessToken, {
              expires: 4 * 60,
            });
            Cookies.set("refresh", response.data.refreshToken);
          }
        } catch (error: any) {
          console.error("Login failed:", error);
          throw error;
        }
      },

      checkExpiry: () => {},
      refreshToken: async () => {
        try {
          const response = await _http.post(`/api/v1/auth/refresh`, {
            refreshToken: get().refresh,
          });

          if (response.status === 200) {
            set({
              access: response.data.accessToken,
            });
            Cookies.set("access", response.data.accessToken, {
              expires: 4 * 60,
            });
          }
        } catch (error: any) {
          console.error("Login failed:", error);
          throw error;
        }
      },
      logout: () => {
        set({ access: "", refresh: "", isLogin: false });
        Cookies.remove("access");
        Cookies.remove("refresh");
        window.location.reload();
      },
    }),
    {
      name: "authentication",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuth;
