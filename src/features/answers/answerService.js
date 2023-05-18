import authorizeRequest from "../../util/authorizeRequest";

const getQuestions = async (token) => {
  const response = await fetch("http://localhost:8000/questions/", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};

const makeAnswer = (question) => {
  const answer = {};

  answer.title = question.question;
  answer.id = question.answers[1].id;
  answer.body = question.answers[1].message;
  answer.userName = question.answers[1].user_name;
  answer.userImage = question.answers[1].user_image;
  answer.upvoteCount = question.answers[1].upvote_count;
  answer.downvoteCount = question.answers[1].downvote_count;
  answer.totalCount = question.answers[1].totalvote;
  answer.views = question.answers[1].views;
  answer.createdAt = question.answers[1].created_at;
  answer.questionId = question.answers[1].updated_at;
  answer.upvote = question.answers[1].upvote;
  answer.downvote = question.answers[1].downvote;
  answer.slug = question.question_slug;

  return answer;
};

const getAnswers = async (token) => {
  const questions = await getQuestions(token);
  const answers = [];

  for (const question of questions) {
    answers.push(makeAnswer(question));
  }

  return answers;
};

const API_URL = "http://localhost:8000/answer-";

const upvote = async (answerId, token) => {
  const config = {
    method: "PUT",
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(`${API_URL}upvote/${answerId}`, config);
  return response.json();
};

const downvote = async (answerId, token) => {
  const config = {
    method: "PUT",
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(`${API_URL}downvote/${answerId}`, config);
  return response.json();
};

export default postService = {
  getAnswers,
  upvote,
  downvote,
};
