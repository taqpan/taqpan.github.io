import { useEffect } from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { BorderRadius } from "../border-radius/BorderRadius";
import { ErrorPage } from "../error-page/ErrorPage";
import { Home } from "../home/Home";
import { MhwClock } from "../mhw-clock/MhwClock";
import { Navigation } from "../navigation/Navigation";

const Layout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (sessionStorage) {
            const path = sessionStorage.getItem("redirect");
            if (path) {
                sessionStorage.removeItem("redirect");
                navigate(path);
            }
        }
    }, []);

    return <>
        <Navigation/>
        <Outlet/>
    </>;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
        {
            index: true,
            element: <Home/>,
        },
        {
            path: "border-radius",
            element: <BorderRadius/>
        },
        {
            path: "mhw-clock",
            element: <MhwClock/>,
        },
    ],
  },
]);

export default () => (
    <RouterProvider router={router}/>
);
