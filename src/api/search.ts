import _http from "@/utils/http";

export const searchProducts = async (search: string) => {
  const response = await _http.get(`/api/v1/products`, {
    params: {
      name: search,
    },
  });

  return response.data.message;
};
