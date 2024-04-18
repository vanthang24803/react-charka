import { Seo } from "@/components/seo";
import {  Text } from "@chakra-ui/react";

function HomePage() {
  return (
    <>
      <Seo
        title="The Sill | Buy Plants Online"
        description="Easy-care indoor plants, pots & planters, plant care accessories, and more delivered to your door. Free Shipping. 30-Day Guarantee."
      />
      <Text color="primary.400" fontWeight="600">
        Hello Home
      </Text>
    </>
  );
}

export default HomePage;
