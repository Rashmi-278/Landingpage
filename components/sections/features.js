import React from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Icon,
  Stack,
} from "@chakra-ui/react";
import Threefeat from "./threefeat.js"


export default function C2g() {
  const Feature = (props) => {
    return (
      <Flex>
        
        <Flex shrink={0}>
          <Flex
            alignItems="center"
            justifyContent="center"
            h={12}
            w={12}
            rounded="md"
            bg={useColorModeValue("brand.500")}
            color="white"
          >
            <Icon
              boxSize={6}
              fill="none" 
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {props.icon}
            </Icon>
          </Flex>
        </Flex>
        <Box ml={4}>
          <chakra.dt
            fontSize="lg"
            fontWeight="medium"
            lineHeight="6"
            color={useColorModeValue("gray.900")}
          >
            {props.title}
          </chakra.dt>
          <chakra.dd mt={2} color={useColorModeValue("gray.500", "gray.400")}>
            {props.children}
          </chakra.dd>
        </Box>
      </Flex>
    );
  };
  return (
    <Flex
      bg="gray.600"
      p={20}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box py={12} bg={useColorModeValue("white", "gray.800")} rounded="xl">
        <Box maxW="7xl" mx="auto" px={{ base: 4, lg: 8 }}>
          <Box textAlign={{ lg: "center" }}>
            <chakra.h2
              color={useColorModeValue("brand.600", "gray.50")}
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              {/* How it works */}
            </chakra.h2>
            <chakra.p
              mt={2}
              fontSize={{ base: "3xl", sm: "4xl" }}
              lineHeight="8"
              fontWeight="extrabold"
              letterSpacing="tight"
              color={useColorModeValue("gray.900" , "gray.100")}
            >
              A better arbiter of public crediblity
            </chakra.p>
            <chakra.p
              mt={4}
              maxW="2xl"
              fontSize="xl"
              mx={{ lg: "auto" }}
              color={useColorModeValue("gray.500", "gray.400")}
            >
Ideamarket offers creators a new income stream based on trust, without dependence on ads or paywalls.
            </chakra.p>
          </Box>

          <Threefeat/>
        </Box>
      </Box>
    </Flex>
  );
}