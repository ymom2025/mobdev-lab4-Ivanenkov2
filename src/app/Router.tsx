import { createBrowserRouter } from "react-router";
import Page from "../page/PageMain";
import Click from "../components/ClickOnePers/ClickOnePers";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Page/>
    },
    {
        path: "/character/:id",
        element: <Click/>
    }
]);

export default router