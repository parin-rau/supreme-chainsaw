import { Navigate, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./page/ErrorPage";
import RootLayout from "./layout/RootLayout";
import HomePage from "./page/HomePage";
import BaseStyles from "./layout/BaseStyles";

const errorElement = <ErrorPage />;

export const router = createBrowserRouter([
  // BASE STYLING APPLIES TO ALL ROUTES
  {
    path: "/",
    element: <BaseStyles />,
    errorElement,
    children: [
      {
        path: "/",
        element: <RootLayout />,
        errorElement,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
          {
            path: "*",
            element: <Navigate to={"/"} replace />,
          },
        ],
      },
    ],
  },
]);
