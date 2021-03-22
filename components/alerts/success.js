import React from "react";
import { chakra, Box, Icon, Flex, useColorModeValue } from "@chakra-ui/react";

import { IoMdCheckmarkCircle } from "react-icons/io";

const Ma = () => {
  return (
    <Flex
        maxW="sm"
        w="full"
        
        bg={useColorModeValue("white", "gray.800")}
        
        rounded="lg"
        overflow="hidden"
      >
        

        <Box mx={-3} py={2} px={4}>
          <Box mx={3}>
            <chakra.span
              color={useColorModeValue("green.500", "green.400")}
              fontWeight="bold"
            >
              Success
            </chakra.span>
            <chakra.p
              color={useColorModeValue("gray.600", "gray.200")}
              fontSize="sm"
            >
              
            </chakra.p>
          </Box>
        </Box>
      </Flex>
  );
};

export default Ma;