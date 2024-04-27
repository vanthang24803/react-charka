import _http from "@/utils/http";

export const fetchProfile = async () => {
  const response = await _http.get(`/api/v1/auth/profile`);

  return response.data;
};
