import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  IconButton,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Wrap,
  WrapItem,
  Image,
  VStack,
  StackDivider,
  Center,
  Divider,
} from "@chakra-ui/react";
import {
  CollegeIcon,
  ForwardIcon,
  LocationIcon,
  PencilIcon,
  PostLogo,
  WorkIcon,
} from "../components/Icons";
import {
  CalendarIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  EmailIcon,
  SearchIcon,
} from "@chakra-ui/icons";

const Profile = () => {
  return (
    <Box as="section" bg="whiteAlpha.600" minH="100vh">
      <Container maxW="6xl">
        <Flex p="30px">
          <Box flex="2" bg="inherit">
            <Box>
              <Flex>
                <Box mr="50px">
                  <Avatar
                    src="https://qph.cf2.quoracdn.net/main-thumb-801409686-200-ycqjuoyjaxqimjdyxycaaajqrsayzwvm.jpeg"
                    size="2xl"
                  ></Avatar>
                </Box>
                <Box flex="1">
                  <Heading size="lg">Aditya Singh</Heading>
                  <Text fontSize="xs" color="gray.500" mt="10px">
                    Add profile credential
                  </Text>
                  <Text fontSize="xs" mt="5px">
                    0 followers 0 following
                  </Text>
                </Box>
                <IconButton
                  borderRadius="full"
                  aria-label="Search database"
                  icon={<ForwardIcon fontSize="xl" />}
                />
              </Flex>
            </Box>
            <Box pt="10px">
              <Text
                _hover={{ textDecoration: "underline" }}
                cursor="pointer"
                fontSize="xs"
                color="gray.500"
              >
                Write a description about yourself
              </Text>
            </Box>
            <Box>
              <Tabs color="gray" colorScheme="purple" size="md">
                <TabList>
                  <Tab fontSize="13px" fontWeight="500">
                    Profile
                  </Tab>
                  <Tab fontSize="13px" fontWeight="500">
                    Answers
                  </Tab>
                  <Tab fontSize="13px" fontWeight="500">
                    Questions
                  </Tab>
                  <Tab fontSize="13px" fontWeight="500">
                    Posts
                  </Tab>
                  <Tab fontSize="13px" fontWeight="500">
                    Followers
                  </Tab>
                  <Tab fontSize="13px" fontWeight="500">
                    Following
                  </Tab>
                  <Tab fontSize="13px" fontWeight="500">
                    Edits
                  </Tab>
                  <Tab fontSize="13px" fontWeight="500">
                    Activity
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel fontSize="15px">
                    <Flex>
                      <Text fontWeight="500">Profile 0</Text>
                      <Button
                        colorScheme="purple"
                        variant="ghost"
                        fontSize="14px"
                        fontWeight="500"
                        size="xs"
                        marginLeft="auto"
                      >
                        Most Recent
                        <ChevronDownIcon boxSize={4} />
                      </Button>
                    </Flex>
                    <Box padding="56px">
                      <Image
                        mx="auto"
                        boxSize="100px"
                        objectFit="cover"
                        paddingBottom="4px"
                        src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.dormant_lightmode.png-26-c4532c98034818a0.png"
                        alt="No answers"
                      />
                      <Text textAlign="center">
                        You haven't shared, answered or posted anything yet.
                      </Text>
                    </Box>
                    <Box display="flex">
                      <Button
                        mx="auto"
                        size="sm"
                        colorScheme="purple"
                        borderRadius="100"
                      >
                        Answer questions
                      </Button>
                    </Box>
                  </TabPanel>
                  <TabPanel fontSize="15px" fontWeight="500">
                    Answers 0
                  </TabPanel>
                  <TabPanel fontSize="15px" fontWeight="500">
                    Questions 0
                  </TabPanel>
                  <TabPanel fontSize="15px" fontWeight="500">
                    Posts 0
                  </TabPanel>
                  <TabPanel fontSize="15px" fontWeight="500">
                    Follwers 0
                  </TabPanel>
                  <TabPanel fontSize="15px" fontWeight="500">
                    Following 0
                  </TabPanel>
                  <TabPanel fontSize="15px" fontWeight="500">
                    Edits 0
                  </TabPanel>
                  <TabPanel fontSize="15px" fontWeight="500">
                    Activity 0
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </Box>
          <Box flex="1" px="50px">
            <VStack align="stretch" justifyContent="center">
              <Box>
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  pb="10px"
                >
                  <Text
                    display="flex"
                    fontSize="15px"
                    fontWeight="500"
                    paddingBottom="5px"
                  >
                    Credentials & Highlights
                  </Text>
                  <IconButton
                    border="0.4px solid gray"
                    borderRadius="full"
                    size="sm"
                    aria-label="Search database"
                    icon={<PostLogo fontSize="md" />}
                  />
                </Flex>
                <Divider />
                <Box paddingTop="20px" py="5px">
                  <Flex fontSize="15px" alignItems="center">
                    <WorkIcon fontSize="m" />
                    <Text paddingLeft="5px">Student at Education</Text>
                    <Text paddingLeft="20px" color="gray.500">
                      {" "}
                      2005-present
                    </Text>
                  </Flex>
                </Box>
                <Box py="5px">
                  <Flex fontSize="15px" alignItems="center">
                    <CollegeIcon fontSize="m" />
                    <Text paddingLeft="5px">
                      Class 12 Science in Science & Common Entrance Examination
                      for Design 2018
                    </Text>
                  </Flex>
                </Box>
                <Box py="5px">
                  <Flex fontSize="15px" alignItems="center">
                    <LocationIcon fontSize="m" />
                    <Text paddingLeft="5px">
                      Lives in Tinsukia, Assam, India
                    </Text>
                  </Flex>
                </Box>
                <Box py="5px">
                  <Flex fontSize="15px" alignItems="center">
                    <CalendarIcon color="gray.500" fontSize="m" boxSize={3} />
                    <Text paddingLeft="5px">Joined May 2019</Text>
                  </Flex>
                </Box>
              </Box>

              <Box py="20px">
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  pb="10px"
                >
                  <Text
                    display="flex"
                    fontSize="15px"
                    fontWeight="500"
                    paddingBottom="5px"
                  >
                    Knows About
                  </Text>
                  <IconButton
                    border="0.4px solid gray"
                    borderRadius="full"
                    size="sm"
                    aria-label="Search database"
                    icon={<PostLogo fontSize="md" />}
                  />
                </Flex>
                <Divider />
                <Box paddingTop="20px" py="5px" display="flex">
                  <Flex fontSize="15px" alignItems="center">
                    <IconButton
                      aria-label="Search database"
                      icon={<EmailIcon />}
                    />
                    <Text fontWeight="500" paddingLeft="5px">
                      Tinsukia, Assam, India
                    </Text>
                  </Flex>
                </Box>{" "}
                <Box py="5px" display="flex">
                  <Flex fontSize="15px" alignItems="center">
                    <IconButton
                      aria-label="Search database"
                      icon={<EmailIcon />}
                    />
                    <Text fontWeight="500" paddingLeft="5px">
                      Education
                    </Text>
                  </Flex>
                </Box>{" "}
                <Box py="5px" display="flex">
                  <Flex fontSize="15px" alignItems="center">
                    <IconButton
                      aria-label="Search database"
                      icon={<EmailIcon />}
                    />
                    <Text fontWeight="500" paddingLeft="5px">
                      Science
                    </Text>
                  </Flex>
                </Box>{" "}
                <Box py="5px" display="flex">
                  <Flex fontSize="15px" alignItems="center">
                    <IconButton
                      aria-label="Search database"
                      icon={<EmailIcon />}
                    />
                    <Text fontWeight="500" paddingLeft="5px">
                      Assam
                    </Text>
                  </Flex>
                </Box>
              </Box>
            </VStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Profile;
