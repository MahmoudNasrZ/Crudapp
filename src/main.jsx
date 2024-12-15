// import React from 'react'
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Store/index";
//Package
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./index.css";
//Pages
import RouteLayOut from "./RouteLayOut";
import PostList from "./Pages/PostList";
import ErrorPage from "./ErrorPage";
import Index from "./Pages/Index";
import InsertPost from "./Pages/InsertPost";
import EditPost from "./Pages/EditPost";
import Details from "./Pages/Details";
//router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const postPramhandler = ({ params }) => {
  if (isNaN(params.id)) {
    throw new Response("Bad Request", {
      statusText: "Please Enter Correct Post ID",
      status: 400,
    });
  }
  return params;
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayOut />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "/",
        element: <PostList />,
      },
      {
        path: "post/add",
        element: <InsertPost />,
      },
      {
        path: "post/:id/edit-post",
        element: <EditPost />,
        loader: postPramhandler,
      },
      {
        path: "post/:id/details",
        element: <Details />,
        loader: postPramhandler,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
