import _http from "@/utils/http";

export const fetchProducts = async () => {
  const response = await _http.get(`/api/v1/products`);

  return response.data.message;
};
