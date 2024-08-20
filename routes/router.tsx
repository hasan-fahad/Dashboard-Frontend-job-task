import * as React from "react";
import {
    createBrowserRouter,
    
  } from "react-router-dom";
import App from "../src/App";
import Dashboard from "../src/components/Dashboard";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
       {
        path: "/dashboard",
        element: <Dashboard/>,
       }
      ],
    },
  ]);