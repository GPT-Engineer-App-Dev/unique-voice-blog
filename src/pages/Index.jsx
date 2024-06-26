import { Container, VStack, Heading, Text, Box, Image, Link, Button, useColorModeValue, IconButton } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub, FaTrash } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Index = ({ posts, deletePost }) => {
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("black", "white");
  return (
    <Container centerContent maxW="container.md" py={8} bg={bg} color={color}>
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
            <Box key={index} p={5} shadow="md" borderWidth="1px" position="relative">
              <Heading fontSize="xl">{post.title}</Heading>
              <Text mt={4}>{post.content}</Text>
              <IconButton
                icon={<FaTrash />}
                colorScheme="red"
                size="sm"
                position="absolute"
                top="1rem"
                right="1rem"
                onClick={() => deletePost(index)}
              />
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