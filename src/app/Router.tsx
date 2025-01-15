import { createBrowserRouter } from "react-router";
import Page from "../page/PageMain";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Page/>
    }
])

export default router