const API_URL = "http://localhost:8000/question/";

const getQuestion = async (slug, token) => {
  const config = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(`${API_URL}${slug}`, config);
  return response.json();
};

export default questionService = {
  getQuestion,
};
