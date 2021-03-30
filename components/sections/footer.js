import React from "react";
import {
  chakra,
  HStack,
  VStack,
  Heading,
  Flex,
  Text,
  Icon,
  useColorModeValue,
  useToken,
} from "@chakra-ui/react";
import { FaDiscord , FaTwitterSquare , FaGithub } from "react-icons/fa";

export default function Component() {
return (
<VStack
     w="full"
     bg={useColorModeValue("gray.200", "gray.300")}
     p={50}
     > 
  <HStack>
  <a target="_blank" href="https://discord.com/invite/zaXZXGE4Ke" rel="noopener noreferrer" p={3}>
    <FaDiscord size={50}/>
  </a>

  <a target="_blank"  href="https://twitter.com/ideamarkets_" rel="noopener noreferrer">
    <FaTwitterSquare size={50} />
  </a>
  <a target="_blank" href="https://github.com/Ideamarket" rel="noopener noreferrer">
    <FaGithub size={50} />
  </a>
  </HStack>
  
  <HStack>
      <a target="_blank" href="https://docs.ideamarket.io/" rel="noopener noreferrer">
      <Text px={1} fontWeight="semibold" fontSize="sm">Legal and Privacy</Text>
      </a>
      <a target="_blank"  href="https://docs.ideamarket.io/" rel="noopener noreferrer">
      <Text px={1} fontWeight="semibold" fontSize="sm">Need Help?</Text>
      </a>
      <a target="_blank" href="https://ideamarket.io/TOS.pdf" rel="noopener noreferrer">
      <Text px={1}  fontWeight="semibold" fontSize="sm">Contact Us</Text>
      </a>
  </HStack>

  <Text px={1} fontSize="sm">Copyright 2021 ideamarket.io</Text>

  </VStack>

)
}