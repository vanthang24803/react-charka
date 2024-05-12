import { fetchProducts } from "@/api/product";
import { Billboard } from "@/components/billboard";
import { Categories } from "@/components/main/categories";
import { Introduce } from "@/components/main/introduce";
import { ListCard } from "@/components/main/list-card";
import { Container, Stack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

function HomePage() {
  const { data, isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: () => fetchProducts(),
  });

  return (
    <>
      <Billboard
        primaryUrl="/"
        secondaryUrl="/"
        title="Plant Your Sanctuary"
        description="Create your own green oasis."
        primary="Shop Online"
        secondary="Find A Store"
        thumbnail="https://cdn.sanity.io/images/y346iw48/production/52d9100922d8e0283cb4b7e349bbe01f8b0f9878-1216x903.png?w=1536&h=1141&auto=format"
      />
      <Container maxW="container.2xl" py={[8, 12]} px={[4, 6]}>
        <Stack direction="column" gap={[6, 8]}>
          <Categories />
          <ListCard
            title="Trending Spring Houseplants"
            products={data}
            loading={isLoading}
          />
          <ListCard
            title="Large Plants & Palms"
            products={data}
            loading={isLoading}
          />
          <Introduce />
        </Stack>
      </Container>
    </>
  );
}

export default HomePage;
