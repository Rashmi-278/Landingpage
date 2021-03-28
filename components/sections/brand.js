import React from "react";
import { Box, Flex, Image, Badge, useColorModeValue , HStack , VStack , chakra } from "@chakra-ui/react";
const Cpwe = () => {
 

  return (
    <Flex
      bg={useColorModeValue("gray.100", "gray.500")}
      p={50}
      w={{ sm :"50%" , lg : "full"}}
     justifyContent="center"
    >
     
      <VStack>
        <HStack>
          <Image pl={4}
          src="coindesk.png"
          alt="Hellonext feedback boards software screenshot"
          />
          <Image pl={4}
          height={10}
          src="vice.png"
          alt="Hellonext feedback boards software screenshot"
          />
          <Image pl={4}
          height={9}
          src="nasdaq.png"
          alt="Hellonext feedback boards software screenshot"
          />
        </HStack>
      </VStack>

      
        
      
    </Flex>
  );
};

export default Cpwe;