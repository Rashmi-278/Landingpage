import React from "react";
import { chakra, Box, Flex, useColorModeValue, HStack , Icon

} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { BsHash } from "react-icons/bs"

const Ma = () => {
  return (
    <Flex
      bg="gray.600"
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        maxW="md"
        mx="auto"
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      >
        <Box
          w={1 / 3}
          bgSize="cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')",
          }}
        ></Box>

        <Box w="100%" p={{ base: 4, md: 4 }}>
        <HStack>
            <chakra.h1
            fontSize="2xl"
            fontWeight="bold"
            color={useColorModeValue("gray.800", "white")}
          >#1
          </chakra.h1>

          <chakra.h1
            fontSize="2xl"
            fontWeight="bold"
            pl={{base:8, sm:8 , md:24}}
            color={useColorModeValue("gray.800", "white")}
          >
            @ideamarket
          </chakra.h1>

        </HStack>
          

          <chakra.p
            mt={2}
            fontSize="sm"
            color={useColorModeValue("gray.600", "gray.400")}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
          </chakra.p>

          <HStack spacing={1} display="flex" alignItems="center" mt={2}>
            {/* <StarIcon color={useColorModeValue("gray.700", "gray.300")} /> */}
            <span>
            <chakra.h2 color="black" fontWeight="light" fontSize="md">
              Deposits
            </chakra.h2>
            <chakra.h2 color="black" fontWeight="bold" fontSize="lg">
              $220K
            </chakra.h2>
            </span> 
            <span>
            <chakra.h2 color="black" fontWeight="light" fontSize="md">
              Deposits
            </chakra.h2>
            <chakra.h2 color="black" fontWeight="bold" fontSize="lg">
              $220K
            </chakra.h2>
            </span>
            <span>
            <chakra.h2 color="black" fontWeight="light" fontSize="md">
              Deposits
            </chakra.h2>
            <chakra.h2 color="black" fontWeight="bold" fontSize="lg">
              $220K
            </chakra.h2>
            </span>          
            
          </HStack>

          <Flex mt={3} alignItems="center" justifyContent="space-between">

            <chakra.h1 color="black" fontWeight="bold" fontSize="lg">
              $220
            </chakra.h1>
            <StarIcon color={useColorModeValue("gray.700", "gray.300")} />
            <chakra.button
              bg="gray.800"
              fontSize="xs"
              fontWeight="bold"
              color="white"
              px={2}
              py={1}
              rounded="lg"
              textTransform="uppercase"
              _hover={{
                bg: useColorModeValue("gray.700", "gray.600"),
              }}
              _focus={{
                bg: useColorModeValue("gray.700", "gray.600"),
                outline: "none",
              }}
            >
              Trade
            </chakra.button>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Ma;



