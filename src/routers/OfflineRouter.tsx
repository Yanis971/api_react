import { createBrowserRouter } from "react-router-dom";
import HomeOffline from "../screens/OfflineScreens/HomeOffline";
import PageError from "../screens/ErrorScreens/PageError";
import Login from "../screens/OfflineScreens/Login";
import Register from "../screens/OfflineScreens/Register";

const OfflineRouter = createBrowserRouter([
  {
    element: (
      <>
        <HomeOffline />
      </>
    ),
    errorElement: <PageError />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      }
    ]
  }
]);

export default OfflineRouter;
