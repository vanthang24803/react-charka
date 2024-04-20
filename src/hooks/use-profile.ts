import _http from "@/utils/http";
import { useEffect, useState } from "react";
import useAuth from "./use-auth";

export default function useProfile() {
  const { isLogin } = useAuth();
  const [data, setData] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await _http.get(`/api/v1/auth/profile`);
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (e: any) {
      setError(e);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isLogin) {
      fetchData();
    }
  }, []);

  return {
    data,
    loading,
    error,
  };
}
