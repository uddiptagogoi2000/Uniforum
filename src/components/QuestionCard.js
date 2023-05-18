import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import { AnswerIcon, FollowIcon, PassIcon } from "./Icons";

const QuestionCard = ({ question, answers }) => {
  return (
    <Card py="0.5rem">
      <CardHeader py="0.5rem">
        <Heading fontSize="lg" _hover={{ textDecoration: "underline" }}>
          {question}
        </Heading>
      </CardHeader>
      <CardBody py="0" color="gray.500" fontSize="sm">
        <Text fontWeight="bold">
          {answers?.length === 0
            ? "No answer yet"
            : `${answers?.length} answers`}
        </Text>
      </CardBody>
      <CardFooter py="0" gap="30px">
        <Button variant="outline" borderRadius="2em" fontWeight="medium">
          <AnswerIcon fontSize="20px" mr="5px" />
          Answer
        </Button>
        <Button variant="unstyled" borderRadius="2em" fontWeight="medium">
          <FollowIcon fontSize="20px" mr="5px" />
          Follow
        </Button>
        <Button variant="unstyled" borderRadius="2em" fontWeight="medium">
          <PassIcon fontSize="20px" mr="5px" />
          Pass
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuestionCard;
