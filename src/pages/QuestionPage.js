import { useParams } from "react-router-dom";
import { Box, Container, Heading } from "@chakra-ui/react";
import QuestionCard from "../components/QuestionCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getQuestion } from "../features/question/questionSlice";
import { authorize } from "../features/auth/authSlice";

const QuestionPage = () => {
  const { slug } = useParams();

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { access: token, refresh } = user;

  const { question } = useSelector((state) => state.question);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(authorize());
        await dispatch(getQuestion(slug, token));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <Box as="section" py="10px">
      <Container mt="60px">
        <QuestionCard {...question} />
      </Container>
    </Box>
  );
};

export default QuestionPage;
