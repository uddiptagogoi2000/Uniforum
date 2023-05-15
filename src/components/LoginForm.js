import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);

  //   fetch("http://localhost:8000/token/", {
  //     method: "POST",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify({
  //       email: formData.get("email"),
  //       password: formData.get("password"),
  //     }),
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((token) => {
  //       localStorage.setItem("access-token", token.access);
  //       localStorage.setItem("refresh-token", token.refresh);

  //       return fetch("http://localhost:8000/user/get-user/", {
  //         method: "GET",
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("access-token")}`,
  //         },
  //       });
  //     })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       navigate("/");
  //     })
  //     .catch((error) => console.log(error));
  // }

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const { access, refresh } = await getToken(formData);
      const user = await getUser(access);
      user.access = access;
      user.refresh = refresh;
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  async function getToken(formData) {
    const response = await fetch("http://localhost:8000/token/", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });
    return response.json();
  }

  async function getUser(accessToken) {
    const response = await fetch("http://localhost:8000/user/get-user/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.json();
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
