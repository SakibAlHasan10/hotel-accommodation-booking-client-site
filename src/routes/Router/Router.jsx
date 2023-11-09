import { createBrowserRouter } from "react-router-dom";
import Root from "../../pages/Root/Root";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Signup from "../../pages/Signup/Signup";
import Bookings from "../../pages/Bookings/Bookings";
import Rooms from "../../pages/Rooms/Rooms";
import AboutUs from "../../pages/AboutUs/AboutUs";
import ContactUs from "../../pages/ContactUs/ContactUs";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import RoomDetails from "../../pages/RoomDetails/RoomDetails";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import DetailsPupUp from "../../components/DetailsPopup/DetailsPupUp";
import Reviews from "../../components/Reviews/Reviews";
import DateChangePopUp from "../../components/DateChangePopUp/DateChangePopUp";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        
      },
      {
        path: "/My Bookings",
        element: <PrivateRouter><Bookings></Bookings></PrivateRouter>,
        children:[
          {
            path:'review/:id',
            element:<Reviews></Reviews>
          },
          
        ]
      },
      {
        path: "/Rooms",
        element: <Rooms></Rooms>,
      },
      {
        path:"/About Us",
        element:<AboutUs></AboutUs>
      },
      {
        path:"/Contact Us",
        element:<ContactUs></ContactUs>
      },
      {
        path:'/details/:id',
        element: <RoomDetails/>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path:"/popup",
        element:<DetailsPupUp/>
      },
      {
        path:'/update/:id',
        element:<DateChangePopUp/>
      },
    ],
  },
]);
export default router;
