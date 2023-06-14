import React from 'react'
import App from '../App'
import HomePage from '../Components/Home/HomePage/HomePage';
import RedPage from '../Components/Red/RedPage/RedPage';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Random from '../Components/Random';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "",
                element: <HomePage/>,
            },
            {
                path: "Home",
                element: <HomePage/>
            },
            {
                path: "Red",
                element: <RedPage/>
            },
            {
                path: "Yellow",
                element: <Random/>
            },
            {
                path: "Blue",
                element: <Random/>
            },
        ]
    }
])

const PageRouter = () => {
  return <RouterProvider router={router}/>;
}

export default PageRouter