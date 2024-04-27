import useAuth from "@/hooks/use-auth";
import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }: PropsWithChildren) {
  const { isLogin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate("/");
    }
  }, [navigate, isLogin]);

  return children;
}
