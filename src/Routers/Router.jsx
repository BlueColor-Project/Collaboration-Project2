//Router는 Version 6 를 사용
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import Login from "../pages/login";
import SignUp from "../pages/SignUp";
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
          path: "/fin-duo",
          element: <FinDuoPage />,
        },
    ],
  },
]);

export default router;