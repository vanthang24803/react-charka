import { Box, Stack, Spinner, Center } from "@chakra-ui/react";

import { Card } from "@/components/card";

type Props = {
  title: string;
  col: number;
  products: Product[] | undefined;
  loading: boolean;
};

export const ListCard = ({ title, col, products, loading }: Props) => {
  return (
    <Stack direction="column" gap={4} minH="20vh">
      <h2 className="font-medium text-[22px] md:text-[32px] lg:text-[36px]">
        {title}
      </h2>
      {loading ? (
        <Center>
          <Spinner color="primary.400" />
        </Center>
      ) : (
        <Box className={`grid grid-cols-2 lg:grid-cols-${col} gap-4 md:gap-6`}>
          {products?.map((item, index) => (
            <Card product={item} key={index} />
          ))}
        </Box>
      )}
    </Stack>
  );
};
