//Router는 Version 6 를 사용
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
<<<<<<< HEAD
import Home from "../pages/Home";
=======
>>>>>>> dev
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

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
    ],
  },
]);

export default router;
