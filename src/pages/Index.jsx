import { Container, VStack, Heading, Text, Box, Image, Link } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Box boxSize="150px">
          <Image src="/images/profile.jpg" alt="Profile Picture" borderRadius="full" boxSize="150px" />
        </Box>
        <Heading as="h1" size="2xl">Welcome to My Blog</Heading>
        <Text fontSize="lg" textAlign="center">
          Hi, I'm [Your Name], a passionate writer and developer. Follow my journey as I share insights on technology, programming, and life.
        </Text>
        <VStack spacing={4}>
          <Link href="https://twitter.com" isExternal>
            <FaTwitter size="30px" />
          </Link>
          <Link href="https://linkedin.com" isExternal>
            <FaLinkedin size="30px" />
          </Link>
          <Link href="https://github.com" isExternal>
            <FaGithub size="30px" />
          </Link>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;