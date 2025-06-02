import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
import RootLayout from '../Pages/Layouts/RootLayout';
import Home from '../Pages/Home/Home';
import AuthLayout from '../Pages/Layouts/AuthLayout';
import Register from '../Pages/Register/Register';
import SignIn from '../Pages/SignIn/SignIn';
import JobDetails from '../Pages/JobDetails/JobDetails';
import JobApply from '../Pages/JobApply/JobApply';
import PrivateRoute from '../Routes/PrivateRoute';
import MyAppplications from '../Pages/MyApplications/MyAppplications';


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: Home
        },
        {
          path: "/jobs/:id",
          loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`),
          Component: JobDetails
        },
        {
          path: "/jobApply/:id",
          loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`),
          element: <PrivateRoute><JobApply></JobApply></PrivateRoute>
        },
        {
          path: "/applications",
          element: <PrivateRoute><MyAppplications></MyAppplications></PrivateRoute>
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