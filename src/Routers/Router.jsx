//Router는 Version 6 를 사용
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Register from "../pages/Register";
import Community from "../pages/Community/Community";
import FinDuoPage from "../pages/FinDuo/FinDuoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/community",
          element: <Community />,
        },
        {
          path: "/fin-duo",
          element: <FinDuoPage />,
        },
    ],
  },
]);

export default router;