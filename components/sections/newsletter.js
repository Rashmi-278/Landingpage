import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  SimpleGrid,
  GridItem,
  VisuallyHidden,
  Input,
  Button,
  Stack,
  Icon,
} from "@chakra-ui/react";

const Newsletter = () => {
  const Feature = (props) => (
    <Flex alignItems="center" color={useColorModeValue("gray.900", "gray.300")}>
      <Icon
        boxSize={4}
        mr={1}
        color="green.600"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        ></path>
      </Icon>
      {props.children}
    </Flex>
  );
  return (
    <Box px={4} py={32} mx="auto"   bg={useColorModeValue("gray.50","gray.800")}
    >
      <Box
        w={{ base: "full", md: 11 / 12, xl: 8 / 12 }}
        textAlign={{ base: "left", md: "center" }}
        mx="auto"
      >
        <chakra.h1
          mb={3}
          fontSize={{ base: "4xl", md: "5xl" }}
          fontWeight={{ base: "bold", md: "extrabold" }}
          color={useColorModeValue("gray.900", "gray.300")}
          lineHeight="shorter"
        >
          Stay informed and pay attention to what matters.
        </chakra.h1>
        <chakra.p
          mb={6}
          fontSize={{ base: "lg", md: "xl" }}
          color={useColorModeValue("gray.900", "gray.300")}
          lineHeight="base"
        >
          We’re on a mission to bring credebility without corporations. Subscribe to our newsletter to stay updated. 
          {/* little as possible, and we always show you upfront. No hidden fees. No
          bad exchange rates. No surprises. */}
        </chakra.p>
        <SimpleGrid
          as="form"
          w={{ base: "full", md: 7 / 12 }}
          columns={{ base: 1, lg: 6 }}
          spacing={3}
          pt={1}
          mx="auto"
          mb={8}
        >
          <GridItem as="label" colSpan={{ base: "auto", lg: 4 }}>
            <VisuallyHidden>Your Email</VisuallyHidden>
            <Input
              mt={0}
              size="lg"
              type="email"
              placeholder="Enter your email..."
              required={true}
              color={useColorModeValue("gray.900", "gray.100")}

            />
          </GridItem>
          <Button
            as={GridItem}
            w="full"
            variant="solid"
            colSpan={{ base: "auto", lg: 2 }}
            size="lg"
            type="submit"
            colorScheme="brand"
          >
            Get Started
          </Button>
        </SimpleGrid>
        <Stack
          display="flex"
          direction={{ base: "column", md: "row" }}
          justifyContent={{ base: "start", md: "center" }}
          mb={3}
          spacing={{ base: 2, md: 8 }}
          fontSize="xs"
          color={useColorModeValue("gray.900", "gray.100")}

        >
          <Feature>New listings notified</Feature>
          <Feature>Get trending accounts</Feature>
          <Feature>Cancel anytime</Feature>
        </Stack>
      </Box>
    </Box>
  );
};

export default Newsletter;