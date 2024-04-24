import { navigator } from "@/constant";
import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

export const Categories = () => {
  return (
    <Stack direction="column" gap={[2, 4]}>
      <Heading as="h2" fontSize={[28, 32, 38]} fontWeight={500}>
        Most Popular Categories:
      </Heading>
      <Box className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {navigator.map((item, index) => (
          <Link
            to={item.value}
            key={index}
            className="flex flex-col space-y-2 md:space-y-3 lg:space-y-4"
          >
            <Image src={item.thumbnail} alt={item.name} title={item.name} />
            <Text
              className="text-[12px] md:text-base lg:text-[22px]"
              fontWeight={500}
            >
              {item.name}
            </Text>
          </Link>
        ))}
      </Box>
      <Link className="flex items-center space-x-4 mt-2" to="/">
        <Plus size={24} strokeWidth={1.5} />
        <Text>Shop All Plants</Text>
      </Link>
    </Stack>
  );
};
