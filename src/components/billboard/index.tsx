import { useNavigate } from "react-router-dom";
import { Box, Button, Heading, Image, Stack, Text } from "@chakra-ui/react";

type Props = {
  thumbnail: string;
  title: string;
  description: string;
  primary: string;
  secondary?: string;
  primaryUrl: string;
  secondaryUrl?: string;
};

export const Billboard = ({
  thumbnail,
  title,
  description,
  primary,
  secondary,
  primaryUrl,
  secondaryUrl,
}: Props) => {
  const navigate = useNavigate();
  return (
    <Box className="flex md:flex-row flex-col">
      <Box
        className="basis-1/2 hidden md:flex items-center justify-center"
        bgColor="primary.200"
      >
        <Stack
          direction="column"
          gap={{
            lg: "1rem",
            md: "1.25rem",
          }}
          p={4}
        >
          <Heading
            as="h1"
            fontSize={{
              md: "40px",
              lg: "68px",
            }}
            fontWeight={500}
            w={{
              lg: "500px",
            }}
          >
            {title}
          </Heading>
          <Text>{description}</Text>
          <Stack direction="row" gap={4}>
            <Button
              bg="primary.400"
              _hover={{
                opacity: 0.9,
              }}
              rounded="none"
              w={{
                lg: "200px",
                md: "160px",
              }}
              h="45px"
              color="white"
              onClick={() => navigate(primaryUrl)}
            >
              {primary}
            </Button>
            {secondary && secondaryUrl && (
              <Button
                bg="white"
                rounded="none"
                w={{
                  lg: "200px",
                  md: "160px",
                }}
                h="45px"
                color="primary.400"
                onClick={() => navigate(secondaryUrl)}
              >
                {secondary}
              </Button>
            )}
          </Stack>
        </Stack>
      </Box>
      <Box className="basis-1/2">
        <Image
          src={thumbnail}
          alt="billboard"
          className="w-full h-full object-fill"
        />
      </Box>

      {/* Mobile */}
      <Box bgColor="primary.200" className="md:hidden">
        <Stack direction="column" gap={2} py={8} px={6}>
          <Heading
            as="h1"
            fontSize="32px"
            fontWeight={500}
            w={{
              lg: "500px",
            }}
          >
            {title}
          </Heading>
          <Text>{description}</Text>
          <Stack direction="row" gap={4}>
            <Button
              bg="primary.400"
              _hover={{
                opacity: 0.9,
              }}
              rounded="none"
              h="45px"
              color="white"
              onClick={() => navigate(primaryUrl)}
            >
              {primary}
            </Button>
            {secondary && secondaryUrl && (
              <Button
                bg="white"
                rounded="none"
                h="45px"
                color="primary.400"
                onClick={() => navigate(secondaryUrl)}
              >
                {secondary}
              </Button>
            )}
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};
