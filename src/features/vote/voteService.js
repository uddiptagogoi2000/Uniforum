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

export default voteService = {
  upvote,
  downvote,
};
