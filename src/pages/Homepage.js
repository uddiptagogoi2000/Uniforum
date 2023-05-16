import { useDispatch, useSelector } from "react-redux";
import { getPosts, reset } from "../features/posts/postSlice";

import {
  Container,
  Divider,
  Box,
  Card,
  CardHeader,
  Text,
  CardBody,
  Skeleton,
  SkeletonCircle,
} from "@chakra-ui/react";
import PromtBox from "../components/PromtBox";
import Post from "../components/Post";
import QuestionCard from "../components/QuestionCard";
import { useEffect } from "react";

const Homepage = () => {
  const dispatch = useDispatch();

  const { posts, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.posts
  );

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Box as="section" py="10px">
      <Container mt="60px">
        <PromtBox />
        {isLoading ? (
          <>
            <Box
              padding="6"
              boxShadow="lg"
              bg="white"
              mt="20px"
              borderRadius="10px"
            >
              <SkeletonCircle size="10" mb="20px" />
              <Skeleton height="200px" borderRadius="5px" />
            </Box>
            <Box
              padding="6"
              boxShadow="lg"
              bg="white"
              mt="20px"
              borderRadius="10px"
            >
              <SkeletonCircle size="10" mb="10px" />
              <Skeleton height="200px" borderRadius="5px" />
            </Box>
            <Box
              padding="6"
              boxShadow="lg"
              bg="white"
              mt="20px"
              borderRadius="10px"
            >
              <SkeletonCircle size="10" mb="10px" />
              <Skeleton height="200px" borderRadius="5px" />
            </Box>
          </>
        ) : (
          <>
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
          </>
        )}
      </Container>
    </Box>
  );
};

export default Homepage;
