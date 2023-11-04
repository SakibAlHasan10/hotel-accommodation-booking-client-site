import { createBrowserRouter } from "react-router-dom";
import Root from "../../pages/Root/Root";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>
    }
])
export default router;