import { createBrowserRouter } from "react-router-dom";
import Root from "../../pages/Root/Root";
import Home from "../../pages/Home/Home";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        // errorElement:
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    }
])
export default router;