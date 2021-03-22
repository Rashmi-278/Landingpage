import React from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Button,
  useBreakpointValue,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";

export default function Component() {
  const data = [
    { name: "John Covv", email: "contato@johncovv.com" },
    { name: "Michael Jackson", email: "m_jackson@mail.com" },
    { name: "Julia", email: "julia@mail.com" },
    { name: "Martin Madrazo", email: "martin.madrazo@mail.com" },
  ];
  return (
    
      <Stack
        direction={{ base: "column" }}
        w="full"
        bg={{ sm: useColorModeValue("white", "gray.800") }}
        shadow="lg"
      >
        {data.map((person, pid) => {
          return (
            <Flex
              direction={{ base: "row", sm: "column" }}
              bg={useColorModeValue("white", "gray.800")}
            >
              {useBreakpointValue({ base: true, sm: pid === 0 }) && (
                <SimpleGrid
                  spacingY={3}
                  columns={{ base: 1, sm: 11 }}
                  w={{ base: 100, sm: "full" }}
                  textTransform="uppercase"
                  bg={useColorModeValue("gray.100", "gray.700")}
                  color={useColorModeValue("gray.500")}
                  py={{ base: 1, sm: 4 }}
                  px={{ base: 2, sm: 10 }}
                  fontSize="sm"
                  fontWeight="hairline"
                >
                  <span>Name</span>
                  <span>Email</span>
                  <span>Actions</span>
                  <span>Name</span>
                  <span>Email</span>
                  <span>Actions</span>
                  <span>Name</span>
                  <span>Email</span>
                  <span>Actions</span>
                  <span>Name</span>
                  <span>Email</span>
                  <span>Actions</span>
                </SimpleGrid>
              )}
              <SimpleGrid
                spacingY={3}
                columns={{ base: 1, sm: 3 }}
                w="full"
                py={2}
                px={10}
                fontWeight="hairline"
              >
                <span key="f2">{person.name}</span>
                <chakra.span
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                  key="f3"
                >
                  {person.email}
                </chakra.span>
                <span key="action">
                  <Button variant="solid" colorScheme="red" size="sm">
                    Delete
                  </Button>
                </span>
              </SimpleGrid>
            </Flex>
          );
        })}
      </Stack>
  );
}