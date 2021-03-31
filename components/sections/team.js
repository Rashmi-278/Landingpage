import React from "react";
import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link,
  SimpleGrid,
  Button,
  Grid
} from "@chakra-ui/react";

const Ma = () => {
  return (
    

<Flex direction={{base:"column" , lg:"row"}}  justify="center" >
<Box textAlign={{ lg: "center" }} mb={20}>
           
            <chakra.p
              mt={2}
              fontSize={{ base: "3xl", sm: "4xl" }}
              lineHeight="8"
              fontWeight="extrabold"
              letterSpacing="tight"
              color={useColorModeValue("gray.900" , "gray.200")}
            >
Our Team            </chakra.p>
           
          </Box>


<Box
        w="xs"
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        m="5"
        alignSelf="center"

      >
        <Image
          w="full"
          h={56}
          fit="cover"
          src="mike.jpg"
          alt="avatar"
        />

        <Box py={5} textAlign="center">
          <Link
            href="#"
            display="block"
            fontSize="2xl"
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
          >
            Mike Elias
          </Link>
          <chakra.span
            fontSize="sm"
            color={useColorModeValue("gray.700", "gray.200")}
          >
            Founder and CEOO
          </chakra.span>
        </Box>
      </Box>


      <Box
        w="xs"
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        m="5"
        alignSelf="center"
      >
        <Image
          w="full"
          h={56}
          fit="cover"
          src="alex.jpg"
          alt="avatar"
        />

        <Box py={5} textAlign="center">
          <Link
            href="#"
            display="block"
            fontSize="2xl"
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
          >
            Alexander Schlindwein
          </Link>
          <chakra.span
            fontSize="sm"
            color={useColorModeValue("gray.700", "gray.200")}
          >
            CTO and Cheif Architect
          </chakra.span>
        </Box>
      </Box>

</Flex>

  );
};



export default Ma;