import { Container, VStack, Heading, Text, Box, Image, Link, Button } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Index = ({ posts }) => {
  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={8}>
        <Box boxSize="150px">
          <Image src="/images/profile.jpg" alt="Profile Picture" borderRadius="full" boxSize="150px" />
        </Box>
        <Heading as="h1" size="2xl">Welcome to My Blog</Heading>
        <Text fontSize="lg" textAlign="center">
          Hi, I'm [Your Name], a passionate writer and developer. Follow my journey as I share insights on technology, programming, and life.
        </Text>
        <Button as={RouterLink} to="/add-post" colorScheme="teal" size="md">Add New Post</Button>
        <VStack spacing={4} align="stretch" width="100%">
          {posts.map((post, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">{post.title}</Heading>
              <Text mt={4}>{post.content}</Text>
            </Box>
          ))}
        </VStack>
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