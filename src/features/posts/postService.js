import authorizeRequest from "../../util/authorizeRequest";

const getQuestions = async () => {
  const accessToken = await authorizeRequest();
  console.log(accessToken);
  const response = await fetch("http://localhost:8000/questions", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.json();
};

const makePost = (question) => {
  const post = {};

  post.title = question.question;
  post.body = question.answers[1].message;
  post.userName = question.answers[1].user_name;
  post.userImage = question.answers[1].user_image;
  post.upvoteCount = question.answers[1].upvote_count;
  post.downvoteCount = question.answers[1].downvote_count;
  post.totalCount = question.answers[1].totalvote;
  post.views = question.answers[1].views;
  post.createdAt = question.answers[1].created_at;
  post.questionId = question.answers[1].updated_at;
  post.upvote = question.answers[1].upvote;
  post.downvote = question.answers[1].downvote;
  post.slug = question.question_slug;

  return post;
};

const getPosts = async () => {
  const questions = await getQuestions();
  const posts = [];

  for (const question of questions) {
    posts.push(makePost(question));
  }

  return posts;
};

export default postService = {
  getPosts,
};
