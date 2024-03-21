import { createBrowserRouter } from "react-router-dom";
import HomeOffline from "../screens/OfflineScreens/HomeOffline";
import PageError from "../screens/ErrorScreens/PageError";
import Login from "../screens/OfflineScreens/Login";
import Register from "../screens/OfflineScreens/Register";
import Home from "../screens/OnlineScreens/Home";
import App from "../App";
import AddNote from "../screens/OnlineScreens/AddNote";
import EditNote from "../screens/OnlineScreens/EditNote";

const OnlineRouter = createBrowserRouter([
  {
    element: (
      <>
        <App />
      </>
    ),
    errorElement: <PageError />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-note",
        element: <AddNote />,
      },
      {
        path: "/edit-note",
        element: <EditNote />
      }
    ]
  }
]);

export default OnlineRouter;
