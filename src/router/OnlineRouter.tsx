import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import ErrorPage from "../screens/ErrorScreens/ErrorPage"
import AddNote from "../screens/OnlineScreens/AddNote"
import EditNote from "../screens/OnlineScreens/EditNote"
import Home from "../screens/OnlineScreens/Home"

const OnlineRouter = createBrowserRouter([
    {
        element: (
            <>
                <App />
            </>
        ),
        errorElement: <ErrorPage />,
        //on déclare les route avec leur vue
        children: [
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/add-note",
                element: <AddNote />
            },
            {
                path: "/edit-note",
                element: <EditNote />
            },
        ]
    }
])

export default OnlineRouter