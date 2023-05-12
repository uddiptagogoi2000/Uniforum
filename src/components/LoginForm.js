import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

const LoginForm = () => {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    fetch("http://localhost:8000/token/", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((token) => {
        localStorage.setItem("access-token", token.access);
        localStorage.setItem("refresh-token", token.refresh);
      })
      .catch((error) => console.log(error));
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <FormControl mb="10px" isRequired>
        <FormLabel>Email</FormLabel>
        <Input name="email" placeholder="Your email" variant="flushed" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <Input
          name="password"
          placeholder="Your password"
          type="password"
          variant="flushed"
        />
      </FormControl>
      <Box display="flex" justifyContent="flex-end">
        <Button
          borderRadius="full"
          bg="#2f439b"
          color="white"
          mt="20px"
          type="submit"
          _hover={{ bg: "#2f439b" }}
        >
          Login
        </Button>
      </Box>
    </form>
  );
};

export default LoginForm;
