import React from "react";

import {
  Box,
  Button,
  chakra,
  Flex,
  SimpleGrid,
  useColorMode,
  useColorModeValue,
  Image
} from "@chakra-ui/react";

import {motion , Scroll , Frame } from "framer-motion"
export default function Asm() {
  return (
    <>
    <Flex
      bg={useColorModeValue("gray.50","gray.700")}
      w="full"
      
      justifyContent="center"
      alignItems="center"
      
    > 
      <Box
        shadow="xl"
        bg={useColorModeValue("white", "gray.800")}
        px={{ base:"10" , lg:"20"}}
        py={20}
        mx="auto"
      >
         <Box textAlign={{ lg: "center" }} mb={20}>
            <chakra.h2
              color={useColorModeValue("brand.600" , "gray.100")}
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              HOW IT WORKS
            </chakra.h2>
            <chakra.p
              mt={2}
              fontSize={{ base: "3xl", sm: "4xl" }}
              lineHeight="8"
              fontWeight="extrabold"
              letterSpacing="tight"
              color={useColorModeValue("gray.900" , "gray.200")}
            >
            Ideamarket aims to replace corporate media as the arbiter of public credibility. 
            </chakra.p>
            <chakra.p
              mt={4}
              maxW="2xl"
              fontSize="xl"
              mx={{ lg: "auto" }}
              color={useColorModeValue("gray.500", "gray.400")}
            >
              To help achieve this, Ideamarket offers creators a new income stream based on attention-worthiness, without dependence on ads or paywalls.
            </chakra.p>
          </Box>

          <motion.div
          initial={{x: -1000}}
          animate={{x: [-500, -50, -20, -10 , 0] }}>
        <SimpleGrid
          alignItems="start"
          columns={{ base: 1, md: 2 }}
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box>
            <chakra.h2
            mb={4}
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="extrabold"
            letterSpacing="tight"
            textAlign={{ base: "center", md: "left" }}
            color={useColorModeValue("gray.900", "gray.300")}
            lineHeight={{ md: "shorter" }}
            >
              Vote on the attention-worthiness 
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("gray.600", "gray.400")}
              fontSize={{ md: "lg" }}
            >
              Buy account tokens to vote on the attention-worthiness of that account, and sell to revoke your vote. Buying votes says "I think others will want to see this," just like a reddit upvote.
            <span>The first 1,000 tokens for each listing cost $0.10 each. Token price automatically increases by $0.01 for each 100 tokens bought afterward, managed by a bonding curve algorithm.
            </span>
            </chakra.p>
            <Button
              w={{ base: "full", sm: "auto" }}
              size="lg"
              bg={useColorModeValue("gray.900", "gray.700")}
              _hover={{ bg: useColorModeValue("gray.700", "gray.600") }}
              color={useColorModeValue("gray.100", "gray.200")}
              as="a"
              href="#"
            >
              Learn More
            </Button>
          </Box>
          <Box>
            <Image  src="scr1.png">
            </Image>
          </Box>
        </SimpleGrid>
        </motion.div>

        <motion.div
      initial={{x: +1000}}
      animate={{x: [+500, +50, +20, +10 , 0] }}
      transition={{
        type: "tween",
        duration: "2",
        delay: "1"
    }}
      
      >
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, md: 2 }}
          flexDirection="column-reverse"
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box order={{ base: "none", md: 2 }}>
            <chakra.h2
              mb={4}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              textAlign={{ base: "center", md: "left" }}
              color={useColorModeValue("gray.900", "gray.300")}
              lineHeight={{ md: "shorter" }}
            >
              Money compounded
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("gray.600", "gray.400")}
              fontSize={{ md: "lg" }}
            >
              You can list anyone's account (even @elonmusk) as long as it's not already listed. If you add an account owned by someone else, interest will accrue to their wallet after a purchase, and they can claim it anytime.
              Money spent on account tokens is held in compound.finance, a decentralized lending protocol. Compound lends these deposits to borrowers, who pay interest on these loans (usually 1-10% annually).
            </chakra.p>
            <Button
              w={{ base: "full", sm: "auto" }}
              size="lg"
              bg={useColorModeValue("gray.900", "gray.700")}
              _hover={{ bg: useColorModeValue("gray.700", "gray.600") }}
              color={useColorModeValue("gray.100", "gray.200")}
              as="a"
              href="#"
            >
              Learn More
            </Button>
          </Box>
          <Box>
            <Image  src="scr2.png">
            </Image>
          </Box>
        </SimpleGrid>
        </motion.div>

        <motion.div
          initial={{x: -1000}}
          animate={{x: [-500, -50, -20, -10 , 0] }}>

        <SimpleGrid
          alignItems="start"
          columns={{ base: 1, md: 2 }}
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box>
            <chakra.h2
             mb={4}
             fontSize={{ base: "2xl", md: "4xl" }}
             fontWeight="extrabold"
             letterSpacing="tight"
             textAlign={{ base: "center", md: "left" }}
             color={useColorModeValue("gray.900", "gray.300")}
             lineHeight={{ md: "shorter" }}
            >
             Make credibility prohibitively expensive to fake.
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("gray.600", "gray.400")}
              fontSize={{ md: "lg" }}
            >
              All interest generated by account token deposits is paid to the owner of the associated account.
              deamarket is a new income stream for trusted voices, and a new expense for propagandists. 
              This dichotomy makes credibility prohibitively expensive to fake.
            </chakra.p>
            <Button
              w={{ base: "full", sm: "auto" }}
              size="lg"
              bg={useColorModeValue("gray.900", "gray.700")}
              _hover={{ bg: useColorModeValue("gray.700", "gray.600") }}
              color={useColorModeValue("gray.100", "gray.200")}
              as="a"
              href="#"
            >
              Learn More
            </Button>
          </Box>
          <Box>
            <Image  src="scr3.png">
            </Image>
          </Box>
        </SimpleGrid>
        </motion.div>
      </Box>
      
    </Flex>
    </>
  );
}