import { Container, Heading, Box } from "@chakra-ui/react";
import PromtBox from "../components/PromtBox";
import Post from "../components/Post";

const Homepage = () => {
  return (
    <Box as="section" py="10px">
      <Container>
        <PromtBox />
        <Post />
      </Container>
    </Box>
  );
};

export default Homepage;
