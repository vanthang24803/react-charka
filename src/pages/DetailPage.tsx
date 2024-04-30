import { fetchDetailProduct } from "@/api/product";
import { Seo } from "@/components/seo";
import { slugDecode } from "@/utils/slug";
import { Box, Spinner } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

export default function DetailProduct() {
  const location = useLocation();

  const id = slugDecode(location.pathname);

  const { data: product, isLoading } = useQuery({
    queryKey: ["detail"],
    queryFn: () => fetchDetailProduct(id),
  });

  return (
    <>
      <Seo title={`${product?.name} | The Sill`} />

      {isLoading ? <Spinner /> : <Box>{JSON.stringify(product)}</Box>}
    </>
  );
}
