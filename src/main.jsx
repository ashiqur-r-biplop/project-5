import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Statistics from "./Components/Statistics/Statistics";
import AppliedJob from "./Components/AppliedJob/AppliedJob";
import Blogs from "./Components/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'Statistics',
        element: <Statistics></Statistics>
      },
      {
        path:'AppliedJob',
        element: <AppliedJob></AppliedJob>
      },
      {
        path:'Blogs',
        element: <Blogs></Blogs>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
