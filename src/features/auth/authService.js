import {
  verifyToken,
  refreshToken,
  isObjectEmpty,
} from "../../util/authorizeRequest";

const getToken = async (formData) => {
  try {
    const response = await fetch("http://localhost:8000/token/", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });
    return response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getUser = async (accessToken) => {
  try {
    const response = await fetch("http://localhost:8000/user/get-user/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const login = async (userData) => {
  const { access, refresh } = await getToken(userData);
  const user = await getUser(access);
  user.access = access;
  user.refresh = refresh;

  localStorage.setItem("user", JSON.stringify(user));

  return user;
};

const logout = async () => {
  localStorage.removeItem("user");
};

// const authorize = async (access, refresh) => {
//   const obj = await verifyToken(access);
//   console.log(obj);

//   const user = JSON.parse(localStorage.getItem("user"));
//   const updatedUser = {};

//   if (!isObjectEmpty(obj)) {
//     const { access } = await refreshToken(refresh);
//     updatedUser = { ...user, access };
//     localStorage.setItem("user", JSON.stringify(updatedUser));
//   }
//   return updatedUser;
// };

const authService = {
  login,
  logout,
  // authorize,
};

export default authService;
