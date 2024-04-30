import _http from "@/utils/http";

export const fetchProducts = async () => {
  const response = await _http.get(`/api/v1/products`);

  return response.data.message.products as Product[];
};

export const fetchDetailProduct = async (id: string | null) => {
  const response = await _http.get(`/api/v1/products/${id}`);

  return response.data.message as Product;
};
