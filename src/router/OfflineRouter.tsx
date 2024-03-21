import { createBrowserRouter } from "react-router-dom";
import HomeOffline from "../screens/OfflineScreens/HomeOffline";
import Login from "../screens/OfflineScreens/Login";
import ErrorPage from "../screens/ErrorScreens/ErrorPage";
import Register from "../screens/OfflineScreens/Register";

const OfflineRouter = createBrowserRouter([
    {
        element: (
            <>
                <HomeOffline />
            </>
        ),
        errorElement: <ErrorPage />,
        //on déclare les route avec leur vue
        children: [
            {
                path: "/",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },

        ]
    }
])

export default OfflineRouter