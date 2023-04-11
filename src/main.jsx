import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Statistics from "./Components/Statistics/Statistics";
import AppliedJob from "./Components/AppliedJob/AppliedJob";
import Blogs from "./Components/Blogs/Blogs";
import Detail from "./Components/Details/Detail";
import ErrorPage from "./Components/Error/ErrorPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
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
      },
      {
        path: 'Details/:id',
        element: <Detail></Detail>,
        loader: async ({params}) => {
          const res = await fetch('https://raw.githubusercontent.com/Ashiqur23/fake-Db-assignment/main/fakeData.json')
          const data = await res.json()
          const singleData = data?.find(d => d.id == params.id);
          return singleData;
        }
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
