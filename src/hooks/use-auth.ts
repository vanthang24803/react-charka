import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

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
  user: Profile | null;
  profile: () => void;
};

const useAuth = create(
  persist<Store>(
    (set, get) => ({
      access: "",
      refresh: "",
      user: null,
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
              access: response.data.message.accessToken,
              refresh: response.data.message.refreshToken,
            });

            toast.success("Success");

            Cookies.set("access", response.data.message.accessToken, {
              expires: 4 * 60,
            });
            Cookies.set("refresh", response.data.message.refreshToken);
          }
        } catch (error: any) {
          console.error("Login failed:", error);
          throw error;
        }
      },
      profile: async () => {
        try {
          const response = await _http.get(`/api/v1/auth/profile`);

          if (response.status === 200) {
            set({
              user: response.data.message as Profile,
            });
          }
        } catch (error: any) {
          console.error("Login failed:", error);
          throw error;
        }
      },

      checkExpiry: () => {
        const token = Cookies.get("refresh");
        const decoded = jwtDecode(token!);
        if (typeof decoded !== "string" && decoded?.exp) {
          if (Date.now() >= decoded.exp * 1000) {
            get().logout();
          }
        }
      },
      refreshToken: async () => {
        try {
          const response = await _http.post(`/api/v1/auth/refresh`, {
            refreshToken: get().refresh,
          });

          if (response.status === 200) {
            set({
              access: response.data.accessToken,
            });
            Cookies.set("access", response.data.message.accessToken, {
              expires: 4 * 60,
            });
          }
        } catch (error: any) {
          console.error("Login failed:", error);
          throw error;
        }
      },
      logout: () => {
        set({ access: "", refresh: "", isLogin: false, user: null });
        Cookies.remove("access");
        Cookies.remove("refresh");
      },
    }),
    {
      name: "authentication",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuth;
