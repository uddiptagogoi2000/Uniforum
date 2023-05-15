import {
  Box,
  Container,
  Divider,
  Flex,
  List,
  ListItem,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

const NotificationPage = () => {
  const boxStyles = {
    color: "gray.600",
    pl: "10px",
    ":hover": {
      bg: "purple.300",
    },
  };
  return (
    <Box as="section" minH="100vh">
      <Container maxW="5xl" bg="whiteAlpha.600">
        <Flex p="30px">
          <Box w="170px">
            <Box p="10px">
              <Text fontWeight="500">Filters</Text>
            </Box>
            <Divider borderColor="gray.400" />
            <Box py="15px">
              <List>
                <ListItem
                  borderRadius="md"
                  py="5px"
                  my="5px"
                  sx={boxStyles}
                  fontSize="sm"
                >
                  All Notification
                </ListItem>{" "}
                <ListItem
                  borderRadius="md"
                  py="5px"
                  my="5px"
                  sx={boxStyles}
                  fontSize="sm"
                >
                  Stories
                </ListItem>{" "}
                <ListItem
                  borderRadius="md"
                  py="5px"
                  my="5px"
                  sx={boxStyles}
                  fontSize="sm"
                >
                  Questions
                </ListItem>{" "}
                <ListItem
                  borderRadius="md"
                  py="5px"
                  my="5px"
                  sx={boxStyles}
                  fontSize="sm"
                >
                  Spaces
                </ListItem>{" "}
                <ListItem
                  borderRadius="md"
                  py="5px"
                  my="5px"
                  sx={boxStyles}
                  fontSize="sm"
                >
                  People updates
                </ListItem>{" "}
                <ListItem
                  borderRadius="md"
                  py="5px"
                  my="5px"
                  sx={boxStyles}
                  fontSize="sm"
                >
                  Comments and mentions
                </ListItem>{" "}
                <ListItem
                  borderRadius="md"
                  py="5px"
                  my="5px"
                  sx={boxStyles}
                  fontSize="sm"
                >
                  Upvotes
                </ListItem>{" "}
                <ListItem
                  borderRadius="md"
                  py="5px"
                  my="5px"
                  sx={boxStyles}
                  fontSize="sm"
                >
                  Your content
                </ListItem>{" "}
                <ListItem
                  borderRadius="md"
                  py="5px"
                  my="5px"
                  sx={boxStyles}
                  fontSize="sm"
                >
                  Your profile
                </ListItem>{" "}
                <ListItem
                  borderRadius="md"
                  py="5px"
                  my="5px"
                  sx={boxStyles}
                  fontSize="sm"
                >
                  Announcements
                </ListItem>{" "}
                <ListItem
                  borderRadius="md"
                  py="5px"
                  my="5px"
                  sx={boxStyles}
                  fontSize="sm"
                >
                  Earnings
                </ListItem>{" "}
                <ListItem
                  borderRadius="md"
                  py="5px"
                  my="5px"
                  sx={boxStyles}
                  fontSize="sm"
                >
                  Subscriptions
                </ListItem>
              </List>
            </Box>
          </Box>
          <Box flex="2" pl="20px">
            <Box p="10px">
              <Flex>
                <Text fontWeight="500">Notifications</Text>
                <Text ml="auto">Settings</Text>
              </Flex>
            </Box>
            <Divider borderColor="gray.400" />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default NotificationPage;
