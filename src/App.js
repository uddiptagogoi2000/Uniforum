import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";

import Homepage from "./pages/Homepage";
import FollowingPage from "./pages/FollowingPage";
import SpacesPage from "./pages/SpacesPage";
import NotificationPage from "./pages/NotificationPage";
import AnswerPage from "./pages/AnswerPage";
import LoginPage from "./pages/LoginPage";
import QuestionPage from "./pages/QuestionPage";

const isLogin = true;

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "question/:slug",
        element: <QuestionPage />,
      },
      {
        path: "following",
        element: <FollowingPage />,
      },
      {
        path: "answer",
        element: <AnswerPage />,
      },
      {
        path: "spaces",
        element: <SpacesPage />,
      },
      {
        path: "notifications",
        element: <NotificationPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
