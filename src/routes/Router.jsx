import { RouterProvider, createBrowserRouter, Outlet, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import Header from "../components/Header";
import { useAuth } from "../contexts/AuthContext";
import GuestHome from "../pages/GuestHome";
import AddTodoForm from "../pages/AddTodoForm";

export default function Router() {
  const { user } = useAuth();
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Outlet />
        </>
      ),

      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: user ? <Home /> : <GuestHome />,
        },
        {
          path: "/login",
          element: user ? <Navigate to="/" /> : <Login />,
        },
        {
          path: "/register",
          element: user ? <Navigate to="/" /> : <Register />,
        },
        {
          path: "/addtodo",
          element: user ? <AddTodoForm /> : <Navigate to="/" />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
