import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, reset } from "../features/auth/authSlice";

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
  Tooltip,
  Menu,
  MenuGroup,
  MenuItem,
  MenuList,
  MenuDivider,
  MenuButton,
} from "@chakra-ui/react";

import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import {
  AnswerIcon,
  FollowingIcon,
  HomeIcon,
  NotificationIcon,
  PostIcon,
  SpacesIcon,
} from "./Icons";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  const styles = {
    letterSpacing: "1px",
  };

  return (
    <Flex as="nav" bg="white" boxShadow="base" pos="fixed" w="100%" zIndex={1}>
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
            color="#2f439b"
            fontSize="2xl"
          >
            Uniforum
          </Heading>
        </Link>
        <List display="flex" gap="1rem">
          <Link to="/">
            <ListItem>
              <Tooltip label="Home" borderRadius="3xl">
                <IconButton
                  display="flex"
                  alignItems="center"
                  variant="unstyled"
                  colorScheme="teal"
                  aria-label="Call Sage"
                  fontSize="30px"
                  icon={<HomeIcon />}
                />
              </Tooltip>
            </ListItem>
          </Link>
          <Link to="/following">
            <ListItem>
              <Tooltip label="Following" borderRadius="3xl">
                <IconButton
                  display="flex"
                  alignItems="center"
                  variant="unstyled"
                  colorScheme="teal"
                  aria-label="Call Sage"
                  fontSize="30px"
                  icon={<FollowingIcon />}
                />
              </Tooltip>
            </ListItem>
          </Link>
          <Link to="/answer">
            <ListItem>
              <Tooltip label="Answer" borderRadius="3xl">
                <IconButton
                  display="flex"
                  alignItems="center"
                  variant="unstyled"
                  colorScheme="teal"
                  aria-label="Call Sage"
                  fontSize="30px"
                  icon={<AnswerIcon />}
                />
              </Tooltip>
            </ListItem>
          </Link>
          <Link to="/spaces">
            <ListItem>
              <Tooltip label="Spaces" borderRadius="3xl">
                <IconButton
                  display="flex"
                  alignItems="center"
                  variant="unstyled"
                  colorScheme="teal"
                  aria-label="Call Sage"
                  fontSize="30px"
                  icon={<SpacesIcon />}
                />
              </Tooltip>
            </ListItem>
          </Link>
          <Link to="/notifications">
            <ListItem>
              <Tooltip label="Notifications" borderRadius="3xl">
                <IconButton
                  display="flex"
                  alignItems="center"
                  variant="unstyled"
                  colorScheme="teal"
                  aria-label="Call Sage"
                  fontSize="30px"
                  icon={<NotificationIcon />}
                />
              </Tooltip>
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

        <Menu>
          <MenuButton as={Button} variant="unstyled">
            <Avatar
              size="sm"
              mx="1rem"
              bg="gray.500"
              name={user ? user.name : null}
            />
          </MenuButton>
          <MenuList>
            <MenuGroup title="Profile">
              <MenuItem>My Account</MenuItem>
              <MenuItem>Payments </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Help">
              <MenuItem>Docs</MenuItem>
              <MenuItem onClick={onLogout}>Logout</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>

        <ButtonGroup
          size="sm"
          isAttached
          variant="solid"
          borderRadius="2em"
          bgColor="blue.700"
        >
          <Button
            borderLeftRadius="2em"
            fontWeight="normal"
            bg="#2f439b"
            color="white"
            _hover={{ bg: "#2f439b" }}
          >
            Add question
          </Button>
          <Menu>
            <MenuButton borderRadius="none">
              <IconButton
                borderRadius="none"
                borderRightRadius="2em"
                aria-label="Add to friends"
                bg="#2f439b"
                icon={<ChevronDownIcon color="white" />}
              />
            </MenuButton>
            <MenuList p="0">
              <MenuItem>
                <PostIcon fontSize="20px" /> Create post
              </MenuItem>
            </MenuList>
          </Menu>
        </ButtonGroup>
      </Container>
    </Flex>
  );
};

export default Navbar;
