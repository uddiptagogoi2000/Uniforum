import authorizeRequest from "../../util/authorizeRequest";

const getPosts = async () => {
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

export default postService = {
  getPosts,
};
