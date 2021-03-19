import React from "react";
import Link from "next/link";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  useColorMode,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Image,
  Heading
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Gslr() {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  const colorLogo = useColorModeValue("gray.800", "white")

  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
             <Image
                  htmlHeight="35px"
                  htmlWidth="35px"
                  src="logo-color.png"
                  alt="ideamarket.io"
                />
               <Heading as="h3" m={2} size="lg" color={colorLogo}>
                Ideamarket.io
                </Heading>
            </chakra.a>
            
          </Flex>
          <HStack display="flex" alignItems="" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
                <Button variant="ghost">Account</Button>
                <Link href="https://docs.ideamarket.io/">
                <Button variant="ghost">About</Button>
                </Link>
                <Button variant="ghost">Newsletter</Button>
                <Link href="https://discord.com/invite/zaXZXGE4Ke">
                <Button variant="ghost">Community</Button>
                </Link>
                <Button variant="solid"  
                color={useColorModeValue("blue.500", "blue.100")}>
                Connect Wallet
                </Button>
                

            </HStack>
            
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "white")}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                  color={useColorModeValue("gray.800", "white")}

                />

                <Button w="full" variant="ghost">Account</Button>

                <Link href="https://docs.ideamarket.io/">
                <Button w=""full variant="ghost">About</Button>
                </Link>
                   
                <Button w="full" variant="ghost">Newsletter</Button>
                
                <Link href="https://discord.com/invite/zaXZXGE4Ke">
                <Button w="full" variant="ghost">Community</Button>
                </Link>
                
                <Button w="full" variant="solid"  
                color={useColorModeValue("blue.500", "blue.100")}>
                Connect Wallet
                </Button>
                
              </VStack>
            
            </Box>
            <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Switch to ${text} mode`}
                variant="ghost"
                color={colorLogo}
                ml={{ base: "0", md: "3" }}
                onClick={toggleMode}
                icon={<SwitchIcon />}
              />
          </HStack>
        </Flex>
        
      </chakra.header>
    </React.Fragment>
  );
}