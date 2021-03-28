import React from "react";
import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link,
  VStack,
  HStack
} from "@chakra-ui/react";

const Ma = () => {
  return (
    <Flex
      bg="gray.100"
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
     <VStack
        background="brand.900"
        rounded="9px"
        padding="10"
        >
      <HStack>
        <Image
         width={40}
         my={4}
         src="ethereum.png"
         alt="Hellonext feedback boards software screenshot"
       />
       <VStack >
       <chakra.p mb={-3} color={useColorModeValue( "gray.200")}>
         audited by
        </chakra.p>
       <Image pl={4}
        width={40}
        height={8}
        src="qs.png"

        alt="Hellonext feedback boards software screenshot"
        />
       </VStack>
       
      </HStack>
      <VStack>
        <HStack>
          <Image pl={4}
          width={48}
          height={10}
          src="coindesk.png"
          alt="Hellonext feedback boards software screenshot"
          />
          <Image pl={4}
          width={44}
          height={10}
          src="vice.png"
          alt="Hellonext feedback boards software screenshot"
          />
          <Image pl={4}
          width={40}
          height={10}
          src="nasdaq.png"
          alt="Hellonext feedback boards software screenshot"
          />
        </HStack>
      </VStack>
      </VStack>

    </Flex>
  );
};

export default Ma;