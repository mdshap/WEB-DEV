import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import App from "./App.jsx";
import Root from "./Components/Root.jsx";
import Info from "./Components/Info.jsx";
import Home from "./Components/Home.jsx";
import Users from "./Components/Users.jsx";
import UserDetails from "./Components/UserDetails.jsx";
import UpdateUser from "./Components/UpdateUser.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "info",
        Component: Info,
      },
      {
        path: "users",
        Component: Users,
      },
      {
        path: "users/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/users/${params.id}`),
        Component: UserDetails,
      },
      {
        path: "update/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/users/${params.id}`),
        Component: UpdateUser,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
