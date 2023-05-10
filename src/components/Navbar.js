import {
  Container,
  Flex,
  Heading,
  Spacer,
  ListItem,
  List,
  Avatar,
  ButtonGroup,
  Button,
  IconButton,
  InputLeftElement,
  InputGroup,
  Input,
} from "@chakra-ui/react";

import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import {
  AnswerIcon,
  FollowingIcon,
  HomeIcon,
  NotificationIcon,
  SpacesIcon,
} from "./Icons";

const Navbar = () => {
  const styles = {
    letterSpacing: "1px",
  };

  return (
    <Flex as="nav" bg="white" boxShadow="base">
      <Container
        maxW="6xl"
        mx="auto"
        display="flex"
        alignItems="center"
        py="6px"
        gap="1.5rem"
      >
        <Link to="/">
          <Heading
            as="h1"
            fontWeight="medium"
            fontFamily="logo"
            color="purple.700"
            fontSize="2xl"
          >
            Uniforum
          </Heading>
        </Link>
        <List display="flex" gap="1rem">
          <Link to="/">
            <ListItem>
              <IconButton
                display="flex"
                alignItems="center"
                variant="unstyled"
                colorScheme="teal"
                aria-label="Call Sage"
                fontSize="30px"
                icon={<HomeIcon />}
              />
            </ListItem>
          </Link>
          <Link to="/following">
            <ListItem>
              <IconButton
                display="flex"
                alignItems="center"
                variant="unstyled"
                colorScheme="teal"
                aria-label="Call Sage"
                fontSize="30px"
                icon={<FollowingIcon />}
              />
            </ListItem>
          </Link>
          <Link to="/answer">
            <ListItem>
              <IconButton
                display="flex"
                alignItems="center"
                variant="unstyled"
                colorScheme="teal"
                aria-label="Call Sage"
                fontSize="30px"
                icon={<AnswerIcon />}
              />
            </ListItem>
          </Link>
          <Link to="/spaces">
            <ListItem>
              <IconButton
                display="flex"
                alignItems="center"
                variant="unstyled"
                colorScheme="teal"
                aria-label="Call Sage"
                fontSize="30px"
                icon={<SpacesIcon />}
              />
            </ListItem>
          </Link>
          <Link to="/notifications">
            <ListItem>
              <IconButton
                display="flex"
                alignItems="center"
                variant="unstyled"
                colorScheme="teal"
                aria-label="Call Sage"
                fontSize="30px"
                icon={<NotificationIcon />}
              />
            </ListItem>
          </Link>
        </List>
        <Spacer />

        <InputGroup display="flex" alignItems="center">
          <InputLeftElement>
            <SearchIcon color="gray.600" />
          </InputLeftElement>
          <Input type="text" variant="outline" />
        </InputGroup>

        <Avatar size="sm" mx="1rem" bg="gray.500" />
        <ButtonGroup
          size="sm"
          isAttached
          variant="solid"
          borderRadius="2em"
          colorScheme="purple"
        >
          <Button borderLeftRadius="2em" fontWeight="normal">
            Add question
          </Button>
          <IconButton
            borderRightRadius="2em"
            aria-label="Add to friends"
            icon={<ChevronDownIcon />}
          />
        </ButtonGroup>
      </Container>
    </Flex>
  );
};

export default Navbar;
