import {createBrowserRouter} from "react-router"

// Import Pages
import SignUpPage from "../Pages/SignUp"

// Router config
export const AppRouter = createBrowserRouter([{
    path : "/",
    Component : SignUpPage
}])

