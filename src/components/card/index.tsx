import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

type Props = {
  product: Product;
};

export const Card = ({ product }: Props) => {
  const router = useNavigate();
  return (
    <Stack
      direction="column"
      gap={[4, 5]}
      cursor="pointer"
      onClick={() => router(`/product/${product.id}`)}
    >
      <Box className="relative group">
        <Image
          src={product.thumbnail}
          alt={product.name}
          title={product.name}
          objectFit="cover"
        />
        {product.tag && (
          <Box className="absolute top-4 md:top-6 text-white left-0 bg-[#4bd8c8] p-2 flex items-center justify-center text-xs md:text-sm">
            {product.tag.name}
          </Box>
        )}
        <Box className="absolute hidden bottom-4 md:bottom-6 w-full px-4 group-hover:block">
          <Button
            colorScheme="green"
            width="full"
            h={["40px", "45px"]}
            rounded="none"
          >
            Add To Cart
          </Button>
        </Box>
      </Box>
      <Stack direction="column" gap={1}>
        <p className="text-base md:text-xl line-clamp-2">{product.name}</p>
        <i className="text-neutral-400 text-sm md:text-base">
          Choose your planter style
        </i>
        <Flex alignItems="center" justifyContent="space-between" mt={2}>
          <Text>{product.rangePrice}</Text>
          {product.options.length > 1 && (
            <i className="text-neutral-400 text-xs md:text-sm">
              + more options
            </i>
          )}
        </Flex>
      </Stack>
    </Stack>
  );
};
