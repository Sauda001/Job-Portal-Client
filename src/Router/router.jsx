import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
import RootLayout from '../Pages/Layouts/RootLayout';
import Home from '../Pages/Home/Home';
import AuthLayout from '../Pages/Layouts/AuthLayout';
import Register from '../Pages/Register/Register';
import SignIn from '../Pages/SignIn/SignIn';


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: Home
        }
    ]
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
        {
            path: "/auth/register",
            Component: Register
        },
        {
            path: "/auth/signIn",
            Component: SignIn
        }
    ]
  }
]);

export default router;