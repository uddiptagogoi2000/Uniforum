import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Text,
  Flex,
  Heading,
} from "@chakra-ui/react";

const Post = () => {
  return (
    <Card maxW="lg" my="8px">
      <CardHeader>
        <Flex>
          <Flex flex="1" gap="4">
            <Avatar name="Aditya Singh" />
            <Box>
              <Heading size="sm">Aditya Singh</Heading>
              <Text>Tezpur University</Text>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
    </Card>
  );
};

export default Post;
