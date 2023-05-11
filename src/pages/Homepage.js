import {
  Container,
  Divider,
  Box,
  Card,
  CardHeader,
  Text,
  CardBody,
} from "@chakra-ui/react";
import PromtBox from "../components/PromtBox";
import Post from "../components/Post";
import QuestionCard from "../components/QuestionCard";

const Homepage = () => {
  return (
    <Box as="section" py="10px">
      <Container mt="60px">
        <PromtBox />
        <Post />
        <Post />
        <Card>
          <CardHeader py="10px">
            <Text>Questions for you</Text>
          </CardHeader>
          <CardBody p="0">
            <Divider color="gray.500" />
            <QuestionCard />
            <Divider color="gray.500" />
            <QuestionCard />
          </CardBody>
        </Card>
      </Container>
    </Box>
  );
};

export default Homepage;
