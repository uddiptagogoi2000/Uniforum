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
} from "@chakra-ui/react";

import { EditIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const styles = {
    letterSpacing: "1px",
  };

  return (
    <Flex as="nav" bg="white">
      <Container maxW="6xl" mx="auto" display="flex" alignItems="center">
        <Heading as="h1" fontWeight="medium" fontFamily="logo">
          Uniforum
        </Heading>
        <List display="flex" gap="1rem" ml="2rem">
          <Link to="/">
            <ListItem sx={styles}>Home</ListItem>
          </Link>
          <Link to="/following">
            <ListItem sx={styles}>Following</ListItem>
          </Link>
          <Link to="/answer">
            <ListItem sx={styles}>Answer</ListItem>
          </Link>
          <Link to="/spaces">
            <ListItem sx={styles}>Spaces</ListItem>
          </Link>
          <Link to="/notifications">
            <ListItem sx={styles}>Notifications</ListItem>
          </Link>
        </List>
        <Spacer />
        <Avatar size="sm" name="Aditya" mx="1rem" bg="gray.500" />
        <ButtonGroup
          size="sm"
          isAttached
          variant="solid"
          borderRadius="2em"
          colorScheme="purple"
        >
          <Button borderLeftRadius="2em">Add question</Button>
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
