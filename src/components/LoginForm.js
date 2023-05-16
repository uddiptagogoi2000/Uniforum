import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reset, login } from "../features/auth/authSlice";
import { useEffect } from "react";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [isError, isSuccess, user, message, navigate, dispatch]);

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    dispatch(login(formData));
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
          {isLoading ? "loading..." : "Login"}
        </Button>
      </Box>
    </form>
  );
};

export default LoginForm;
