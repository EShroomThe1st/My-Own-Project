import React from 'react'
import App from '../App'
import MainPage from '../Components/MainPage/MainPage'
import RedPage from '../Components/Red/RedPage/RedPage'
import Random from '../Components/Random'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "",
                element: <MainPage/>,
            },
            {
                path: "home",
                element: <MainPage/>
            }
        ]
    }
])

const PageRouter = () => {
  return <RouterProvider router={router}/>;
}

export default PageRouter