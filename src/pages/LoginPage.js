import { useState } from "react";
import { Box, Card, Container, Divider, Heading, Text } from "@chakra-ui/react";
import LoginForm from "../components/LoginForm";
import RootLayout from "../layouts/RootLayout";

const LoginPage = () => {
  return (
    <Box as="div">
      <Container
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Card p="2rem" minW="md">
          <Heading
            as="h1"
            fontFamily="logo"
            mb="0.5rem"
            fontSize="5xl"
            color="#2f439b"
          >
            Uniforum
          </Heading>
          <Heading as="h2" fontSize="sm" color="gray.500">
            A place to share knowledge and better understand the world
          </Heading>
          <Heading
            as="h3"
            fontSize="2xl"
            mt="20px"
            color="#2f439b"
            letterSpacing="1px"
          >
            Login
          </Heading>
          <Divider color="gray.400" my="15px" width="50%" />
          <Box>
            <LoginForm setIsLogin={setIsLogin} />
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default LoginPage;
