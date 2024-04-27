import { Center, Flex, Hide } from "@chakra-ui/react";
import { categories } from "@/constant";
import { Link } from "react-router-dom";
import { MobileSection } from "../mobile/section-mobile";

export const Section = () => {
  return (
    <>
      <Hide below="lg">
        <Center as="section" h="45px" className="border-b border-gray-300">
          <Flex
            align="center"
            justifyContent="center"
            gap={{
              md: "1rem",
              lg: "1.5rem",
            }}
          >
            {categories.map((item, index) => (
              <div className="relative" key={index}>
                <Link
                  to={item.value}
                  className="hover:text-[#00917b] font-semibold hover:italic"
                >
                  {item.name}
                </Link>
                {index === 0 && (
                  <span className="absolute -top-1 -right-2.5 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#009a7b] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#009a7b]"></span>
                  </span>
                )}
              </div>
            ))}
          </Flex>
        </Center>
      </Hide>
      <MobileSection />
    </>
  );
};
