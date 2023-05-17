export const verifyToken = async (access) => {
  const response = await fetch("http://localhost:8000/token/verify/", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      token: access,
    }),
  });

  return response.json();
};

export const refreshToken = async (refresh) => {
  const response = await fetch("http://localhost:8000/token/refresh/", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      refresh,
    }),
  });

  return response.json();
};

export const isObjectEmpty = (obj) => {
  return JSON.stringify(obj) === "{}";
};

const authorizeRequest = async () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const obj = await verifyToken(user.access);

  if (!isObjectEmpty(obj)) {
    const { access } = await refreshToken(user.refresh);
    user.access = access;
    console.log(access);
    localStorage.setItem("user", JSON.stringify(user));
  }
  return user.access;
};

export default authorizeRequest;
