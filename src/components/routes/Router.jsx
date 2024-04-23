import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Home/Home";
import Login from "../Users/Login";
import Register from "../Users/Register";
import Error from "../Error";
import AboutUs from "../Nav/AboutUs";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import ShowDetails from "../PrivateRoutes/ShowDetails";
import Events from "../Nav/Events";
import UserInfo from "../Nav/PrivateLinks/UserInfo";
import YourBookings from "../Nav/PrivateLinks/YourBookings";

const router = createBrowserRouter([
    {


        path:'/',

        element: <Root></Root>,

        errorElement:<Error></Error>,

        children: [
            {
                path: '/',
                element: <Home></Home>,

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/aboutus',
                element:<AboutUs></AboutUs>
            },
            {
                path: '/details/:id',
                loader: ()=>fetch('services.json'),
                element: <PrivateRoute><ShowDetails></ShowDetails></PrivateRoute>,
            },
            {
                path:'/events',
                element:<Events></Events>
            },
            {
                path: '/info',
                element:<UserInfo></UserInfo>
            },
            {
                path: '/bookings',
                element:<YourBookings></YourBookings>
            }
        ]
    }
])

export default router;