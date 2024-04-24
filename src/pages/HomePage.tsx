import { fetchProducts } from "@/api/product";
import { Billboard } from "@/components/billboard";
import { Categories } from "@/components/main/categories";
import { ListCard } from "@/components/main/list-card";
import { Seo } from "@/components/seo";
import { Container, Stack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

function HomePage() {
  const { data, isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: () => fetchProducts(),
  });

  return (
    <>
      <Seo
        title="The Sill | Buy Plants Online"
        description="Easy-care indoor plants, pots & planters, plant care accessories, and more delivered to your door. Free Shipping. 30-Day Guarantee."
      />
      <Billboard
        primaryUrl="/"
        secondaryUrl="/"
        title="Spring is Blooming!"
        description="We’re swooning over our latest collections."
        primary="Shop Online"
        secondary="Find A Store"
        thumbnail="https://cdn.sanity.io/images/y346iw48/production/65781b293fc831046bb03c8f0d00b0115d267525-1216x903.png?w=1536&h=1141&auto=format"
      />
      <Container maxW="container.2xl" py={[8, 12]} px={[4, 6]}>
        <Stack direction="column" gap={[6, 8]}>
          <Categories />
          <ListCard
            title="Trending Spring Houseplants"
            col={4}
            products={data}
            loading={isLoading}
          />
          <ListCard
            title="Large Plants & Palms"
            col={3}
            products={data}
            loading={isLoading}
          />
        </Stack>
      </Container>
    </>
  );
}

export default HomePage;
