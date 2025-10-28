import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./layout/Root.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import EmailLogin from "./components/Register.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },

      {
        path: 'login',
        Component: Login
      },

      {
        path: 'emailLogin',
        Component: EmailLogin
      }
    ]
  },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
