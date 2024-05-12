import { Heading, Stack, Text, SimpleGrid, Image } from "@chakra-ui/react";

export const Introduce = () => {
  const items = [
    {
      image:
        "https://cdn.sanity.io/images/y346iw48/production/84d07688abdf55602905c8913388363009426f11-60x60.svg?auto=format",
      title: "Free Standard Shipping",
      desc: "Enjoy free standard shipping on all plants and planters.",
    },
    {
      image:
        "https://cdn.sanity.io/images/y346iw48/production/e0882a8e72689c1ef1c0898469b09ad6e4e574a6-59x54.svg?auto=format",
      title: "30-Day Customer Happiness Guarantee",
      desc: "Our team preps, prunes, & carefully packs every order—meaning lots of care goes into every step. If your plant arrives damaged or unhealthy, we replace it for free.",
    },
    {
      image:
        "https://cdn.sanity.io/images/y346iw48/production/39a25eee4d0f740bf6169d2dc6f7c8ced0387721-60x60.svg?auto=format",
      title: "Local Stores",
      desc: "Want hands-on plant expertise IRL? Stop by one of our stores in NYC and Bethesda to explore more plants, planters, & care accessories.",
    },
  ];

  return (
    <Stack direction="column" gap={12} my={8}>
      <Stack direction="column" gap={[2, 4]}>
        <Heading as="h2" fontSize={["30px", "35px", "40px"]}>
          To be human is to experience biophilia.
        </Heading>
        <Text fontSize={["12px", "14px"]}>
          <Text as="i">[bio-feelya]</Text>— Our innate desire to connect with
          nature. It’s in our DNA.
        </Text>
      </Stack>
      <hr className="h-px bg-gray-300/90 border-0 " />
      <SimpleGrid columns={[1, 3]} gap={8}>
        {items.map((item, index) => (
          <Stack
            direction="column"
            key={index}
            gap={4}
            alignItems={["center", "start"]}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={["5rem", "6rem"]}
              height={["5rem", "6rem"]}
              objectFit="cover"
            />
            <Heading as="h3" fontWeight={450} fontSize={[18, 22]}>
              {item.title}
            </Heading>
            <Text fontSize={[14, 16]} align={["center", "start"]}>
              {item.desc}
            </Text>
          </Stack>
        ))}
      </SimpleGrid>
    </Stack>
  );
};
