import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Layout from "../Layout/Layout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/', element: <Register /> },
            { path: '/register', element: <Register /> },
            { path: '/login', element: <Login /> },
        ]
    }
])