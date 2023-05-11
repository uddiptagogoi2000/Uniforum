import { Avatar, Box, Button, Flex, IconButton, Input } from "@chakra-ui/react";
import { AnswerIcon, AskIcon, PostIcon } from "./Icons";

const PromtBox = () => {
  return (
    <Box bg="white" borderRadius="0.5em">
      <Flex alignItems="center" gap="10px" px="1rem" pt="1rem">
        <Avatar size="sm" />
        <Input
          borderRadius="5em"
          size="sm"
          borderColor="gray.400"
          placeholder="What do you want to ask or share?"
        />
      </Flex>
      <Flex gap="10px" py="0.5rem" px="5px">
        <Button
          color="gray.500"
          size="sm"
          flexGrow="1"
          bg="transparent"
          fontWeight="semibold"
          borderRadius="5em"
        >
          <IconButton
            display="flex"
            alignItems="center"
            variant="unstyled"
            colorScheme="teal"
            aria-label="Call Sage"
            fontSize="25px"
            padding="0"
            icon={<AskIcon />}
          />
          Ask
        </Button>
        <Button
          color="gray.500"
          size="sm"
          flexGrow="1"
          bg="transparent"
          fontWeight="semibold"
          position="relative"
          borderRadius="5em"
          _before={{
            content: '""',
            display: "inline-block",
            height: "50%",
            width: "1px",
            position: "absolute",
            left: "-5px",
            backgroundColor: "gray.300",
            borderRadius: "1em",
          }}
          _after={{
            content: '""',
            display: "inline-block",
            height: "50%",
            width: "1px",
            position: "absolute",
            right: "-5px",
            backgroundColor: "gray.300",
            borderRadius: "1em",
          }}
        >
          <IconButton
            display="flex"
            alignItems="center"
            variant="unstyled"
            colorScheme="teal"
            aria-label="Call Sage"
            fontSize="25px"
            padding="0"
            icon={<AnswerIcon />}
          />
          Answer
        </Button>
        <Button
          color="gray.500"
          size="sm"
          flexGrow="1"
          bg="transparent"
          fontWeight="semibold"
          borderRadius="5em"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <IconButton
            display="flex"
            alignItems="center"
            variant="unstyled"
            colorScheme="teal"
            aria-label="Call Sage"
            fontSize="25px"
            padding="0"
            icon={<PostIcon />}
          />
          Post
        </Button>
      </Flex>
    </Box>
  );
};

export default PromtBox;
