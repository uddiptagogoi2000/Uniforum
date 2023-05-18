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
  useSafeLayoutEffect,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { upvoteAnswer } from "../features/answers/answerSlice";

import { SmallCloseIcon } from "@chakra-ui/icons";
import { CommentIcon, DownvoteIcon, ShareIcon, UpvoteIcon } from "./Icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { authorize } from "../features/auth/authSlice";
import { getQuestion } from "../features/question/questionSlice";

const Post = ({
  id,
  title,
  body,
  userName,
  userImage,
  upvoteCount,
  views,
  slug,
  getQuestion,
  token,
  getAnswers,
}) => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const onUpvoteClick = () => {
    const fetchData = async () => {
      await dispatch(authorize());
      await dispatch(upvoteAnswer(id));
      if (getQuestion) {
        await dispatch(getQuestion(slug, token));
      } else if (getAnswers) {
        await dispatch(getAnswers());
      }
    };

    fetchData();
  };

  const onDownvoteClick = () => {
    const fetchData = async () => {
      await dispatch(authorize());
      await dispatch(downvote(id));
    };

    fetchData();
  };

  return (
    <Card maxW="lg" my="8px">
      <CardHeader>
        <Flex position="relative">
          <Flex flex="1" gap="4">
            <Avatar name="Aditya Singh" src={userImage} />
            <Box>
              <Heading size="sm">{userName}</Heading>
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
      {title ? (
        <Box px="20px" py="0">
          <Link to={`/question/${slug}`}>
            <Heading
              as="h3"
              fontSize="md"
              _hover={{ textDecoration: "underline" }}
            >
              {title}
            </Heading>
          </Link>
        </Box>
      ) : null}
      <CardBody
        p="0"
        dangerouslySetInnerHTML={{ __html: body }}
        className="post-body"
      >
        {/* <Text p="20px">
          With Chakra UI, I wanted to sync the speed of development with the
          speed of design. I wanted the developer to be just as excited as the
          designer to create a screen.
        </Text>
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "100%" }}
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Caffe Latte"
        /> */}
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
        <ListItem>{views} views</ListItem>
        <ListItem>View {upvoteCount} upvotes</ListItem>
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
          <Button
            borderLeftRadius="2em"
            fontWeight="normal"
            onClick={onUpvoteClick}
          >
            <UpvoteIcon fontSize="20px" mr="5px" />
            Upvote
          </Button>
          <IconButton
            borderRightRadius="2em"
            aria-label="Downvote"
            fontSize="20px"
            icon={<DownvoteIcon />}
            onClick={onDownvoteClick}
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
