import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Text,
  Flex,
  Heading,
  IconButton,
  Tooltip,
  CardBody,
  Image,
  CardFooter,
  UnorderedList,
  ListItem,
  ButtonGroup,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

import { SmallCloseIcon } from "@chakra-ui/icons";
import { CommentIcon, DownvoteIcon, ShareIcon, UpvoteIcon } from "./Icons";
import { useSelector } from "react-redux";

const Post = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Card maxW="lg" my="8px">
      <CardHeader>
        <Flex position="relative">
          <Flex flex="1" gap="4">
            <Avatar name="Aditya Singh" />
            <Box>
              <Heading size="sm">Aditya Singh</Heading>
              <Text>Tezpur University</Text>
            </Box>
          </Flex>
          <Tooltip label="Hide" hasArrow arrowSize={12} placement="top">
            <IconButton
              position="absolute"
              variant="ghost"
              colorScheme="gray"
              aria-label="See menu"
              right="-10px"
              top="-10px"
              borderRadius="full"
              icon={<SmallCloseIcon />}
            />
          </Tooltip>
        </Flex>
      </CardHeader>
      <Box px="20px" py="0">
        <Heading as="h3" fontSize="md">
          Why Chakra UI is amazing?
        </Heading>
      </Box>
      <CardBody p="0">
        <Text p="20px">
          With Chakra UI, I wanted to sync the speed of development with the
          speed of design. I wanted the developer to be just as excited as the
          designer to create a screen.
        </Text>
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "100%" }}
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Caffe Latte"
        />
      </CardBody>
      <UnorderedList
        m="0"
        display="flex"
        listStyleType="none"
        fontSize="sm"
        color="gray.600"
        gap="10px"
        py="10px"
        px="20px"
        letterSpacing="0.5px"
      >
        <ListItem>249.4K views</ListItem>
        <ListItem>View 1,086 upvotes</ListItem>
        <ListItem>View 23 shares</ListItem>
      </UnorderedList>
      <CardFooter py="10px">
        <ButtonGroup
          size="sm"
          isAttached
          variant="solid"
          borderRadius="2em"
          colorScheme="gray"
        >
          <Button borderLeftRadius="2em" fontWeight="normal">
            <IconButton
              borderRightRadius="2em"
              aria-label="Upvote"
              fontSize="20px"
              bg="inherit"
              _hover={{ bg: "inherit" }}
              icon={<UpvoteIcon />}
            />
            Upvote
          </Button>
          <IconButton
            borderRightRadius="2em"
            aria-label="Downvote"
            fontSize="20px"
            icon={<DownvoteIcon />}
          />
        </ButtonGroup>
        <Button
          size="sm"
          borderRadius="full"
          mx="5px"
          variant="ghost"
          color="gray.600"
        >
          <CommentIcon fontSize="20px" />
          22
        </Button>
        <Button
          size="sm"
          borderRadius="full"
          mx="5px"
          variant="ghost"
          color="gray.600"
        >
          <ShareIcon fontSize="20px" />
          23
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Post;
